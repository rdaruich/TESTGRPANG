import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  async getCapital(capital: string): Promise<Observable<any>>{

    return this.http.get(`https://restcountries.com/v3.1/capital/${capital}`)

  }
}
