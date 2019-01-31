import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../model/github.model';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { LocalStorageService, NO_TOKEN } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient,
    private tokenService: TokenService,
    private router: Router,
    private LSService: LocalStorageService) {
    this.LSService.logoutNotifier.subscribe(
      msg => {
        if (msg === NO_TOKEN) {
          this.logout();
        }
      });
  }
  authenticate(token: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.backend_url}/user?access_token=${token}`)
      .pipe(map(resp => {
        this.tokenService.setToken(token);
        return resp;
      }), catchError(this.handleErrorObservable('authenticate', 'error on authentication', null)));
  }
  public handleErrorObservable<T>(operation = 'operation', message?: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      if (message) {
        console.error(message);
      }
      return throwError('wrong credentials..., i guess');
    };
  }
  getUserInfo(): Observable<User> {
    return this.httpClient.get<User>(`${environment.backend_url}/user?access_token=${this.tokenService.getToken()}`);
  }
  logout() {
    this.tokenService.remove();
    this.router.navigateByUrl('login');
  }
}
