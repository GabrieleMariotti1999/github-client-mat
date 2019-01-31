import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../model/location.model';

// tslint:disable-next-line:max-line-length
const GEOCODE_URL = 'https://cors-anywhere.herokuapp.com/https://eu1.locationiq.com/v1/search.php?key=pk.e7d0e436255eab4e65ea2cd38cdb5d1e&format=json';
@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private httpClient: HttpClient) { }

  public geocode(address: string): Observable<Array<Address>> {
    console.log('I\' m on it');
    return this.httpClient.get<Array<Address>>(`${GEOCODE_URL}&q=${address}`);
  }
}
