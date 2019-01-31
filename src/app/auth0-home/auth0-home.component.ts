import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../services/auth0.service';
import { Router } from '@angular/router';
// test

@Component({
  selector: 'app-auth0-home',
  templateUrl: './auth0-home.component.html',
  styleUrls: ['./auth0-home.component.css']
})
export class Auth0HomeComponent implements OnInit {
  constructor(private auth0Service: Auth0Service, private router: Router) { }

  ngOnInit() {
    if (this.auth0Service.isAuthenticated()) {
      console.log('autenticato');
      if (this.auth0Service.isAdmin()) {
        console.log('buongiorno signore');
      } else {
        console.log('scusami, chi hai detto di essere?');
      }
      setInterval(() => {
        this.renewToken();
      }, 1000);
    } else {
      console.log('non autenticato');
      this.router.navigateByUrl('auth0-login');
    }
  }
  public logout() {
    this.auth0Service.logout();
  }
  // test
  renewToken() {
    this.auth0Service.renewToken();
  }
}
