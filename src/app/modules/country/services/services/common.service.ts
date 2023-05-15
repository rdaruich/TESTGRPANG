import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 404) {
      console.error('Recursos no encontrados:', error.message);
    } else {
      console.error('Ocurrió un error en la solicitud:', error.message);
    }
    return throwError(() => new Error('Algo salió mal. Por favor, intenta nuevamente más tarde.'));
  }
}
