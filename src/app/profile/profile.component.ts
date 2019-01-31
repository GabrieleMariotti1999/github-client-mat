import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/github.model';
import { GeocodingService } from '../services/geocoding.service';
import { Address } from '../model/location.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userInfo: User;
  public address: Address;
  lat;
  lng;
  public loading: boolean;
  constructor(private authService: AuthenticationService,
    private geocodingService: GeocodingService) { }

  ngOnInit() {
    this.loading = true;
    this.authService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      this.loadMap(this.userInfo.location);
    });
  }
  loadMap(location: string) {
    this.loading = true;
    // tslint:disable-next-line:prefer-const
    let app = location.split(',');
    location = app[0];
    this.geocodingService.geocode(location).subscribe(address => {
      this.address = address[0];
      this.lat = Number(this.address.lat);
      this.lng = Number(this.address.lon);
    });
    this.loading = false;
  }
}
