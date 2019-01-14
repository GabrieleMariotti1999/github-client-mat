import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  constructor(private authService: AuthenticationService,
    private router: Router,
    private notifications: NotificationsService) { }

  ngOnInit() {
  }
  login() {
    this.authService.authenticate(this.token).subscribe(resp => {
      this.notifications.success('Bentornato ' + resp.name);
      this.router.navigateByUrl('');
    }, err => {
      this.notifications.error('Autenticazione fallita');
    });
  }
}
