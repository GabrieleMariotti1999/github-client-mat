import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../model/github.model';

// tslint:disable-next-line:max-line-length
const GEOCODE_URL = 'https://cors-anywhere.herokuapp.com/https://eu1.locationiq.com/v1/search.php?key=pk.12fcf0ac134d385a0bff62f143ae0eeb&format=json';
@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private httpClient: HttpClient) { }

  public geocode(address: string): Observable<Address> {
    return this.httpClient.get<Address>(`${GEOCODE_URL}&q=${address}`);
  }
}
