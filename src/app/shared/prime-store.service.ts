import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrimeStoreService {

  private api = 'http://localhost:8080';

  constructor( private http: HttpClient) { }

  getPrimes(grenzwert: number): Observable<number[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
      }),
      params: new HttpParams()
    };

    if (grenzwert != null) {
      httpOptions.params = httpOptions.params.append('grenzwert', String(grenzwert));
      return this.http.get<number[]>(this.api + '/primes', httpOptions).pipe(
        retry(3),
        catchError(this.errorHandler)
      );
    }
  }
  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}
