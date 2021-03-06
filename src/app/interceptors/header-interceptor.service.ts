import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }
  public intercept(
    request: HttpRequest<any>,
    handler: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.tokenService.getToken();
    if (token) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: `token ${token}`
        }
      });
      // uso richiesta con headers aggiunti
      console.log('Token found and added to headers');
      return handler.handle(cloned);
    } else {
      // uso richiesta non modificata
      console.log('Token not found');
      return handler.handle(request);
    }
  }
}
