import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User, Address } from '../model/github.model';
import { GeocodingService } from '../services/geocoding.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userInfo: User;
  public address: Address;
  lat = 43.7799368;
  lng = 11.1709276;
  constructor(private authService: AuthenticationService, private geocodingService: GeocodingService) { }

  ngOnInit() {
    this.authService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      this.loadMap(this.userInfo.location);
    });
  }
  loadMap(location: string) {
    this.geocodingService.geocode(location).subscribe(address => {
      this.address = address;
      console.log(this.address.lat);
      this.lat = this.address.lat;
      this.lng = this.address.lon;
      console.log(this.lat);
    });
  }
}
