import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { Auth0TokenService } from './auth0-token.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, timer } from 'rxjs';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {
  /*private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;*/
  refreshSubscription: any;
  auth0 = new auth0.WebAuth({
    clientID: 'xLccBPUUo4VWYhq3yX361SEoGhQ41Yz2',
    domain: 'gm1999.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  });

  constructor(public router: Router, private auth0TokenService: Auth0TokenService, private jwthelperservice: JwtHelperService) {
  }

  get accessToken(): string {
    return this.auth0TokenService.getAccessToken();
  }

  get idToken(): string {
    return this.auth0TokenService.getIdToken();
  }

  public authenticate(): void {
    this.auth0.authorize();
  }
  public isAdmin(): boolean {
    const decoded = this.jwthelperservice.decodeToken();
    const roles = decoded['https://auth0.fakenamespace.multidata.it/roles'] as Array<string>;
    if (roles && roles.includes('ADMIN')) {
      return true;
    }
    return false;
  }
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/auth0-home']);
      } else if (err) {
        this.router.navigate(['/auth0-login']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult): void {
    this.auth0TokenService.setAccessToken(authResult.accessToken);
    this.auth0TokenService.setIdToken(authResult.idToken);
    // this._expiresAt = expiresAt;
  }
  public logout(): void {
    // Remove tokens and expiry time
    this.auth0TokenService.clear();
    this.auth0.logout(); // dogma
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const idToken = this.auth0TokenService.getIdToken();
    if (!idToken) {
      return false;
    }
    const isTokenExpired = this.jwthelperservice.isTokenExpired();
    return !!idToken && !isTokenExpired;
  }
  public renewToken() {
    const expDate = this.jwthelperservice.getTokenExpirationDate(this.auth0TokenService.getIdToken()).getTime();
    const now = new Date();
    const inSeconds = now.getTime();
    const toBeChecked = expDate - inSeconds;
    if (toBeChecked <= 5) {
      this.authenticate();
    }
  }
}
