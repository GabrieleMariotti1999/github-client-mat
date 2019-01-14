import { Injectable } from '@angular/core';
export const TOKEN_NAME = 'gh_token';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
  setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token);
  }
  remove() {
    localStorage.removeItem(TOKEN_NAME);
  }
}
