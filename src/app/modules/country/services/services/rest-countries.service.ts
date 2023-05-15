import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';
import { Country } from '../../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  api = environment.REST_COUNTRIES_API_URL;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient, private commonService: CommonService) { }

  getByCountry(countryName: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api}/name/${countryName}?fields=flag,name,capital,population`, {
      headers: this.httpHeaders
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.commonService.handleError(error);
      })
    );
  }

  getByCapital(capitalName: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api}/capital/${capitalName}?fields=flag,name,capital,population`, {
      headers: this.httpHeaders
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.commonService.handleError(error);
      })
    );
  }


}