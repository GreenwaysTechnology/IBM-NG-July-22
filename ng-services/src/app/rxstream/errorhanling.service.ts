import { Injectable } from '@angular/core';
import { Observable, map, of, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhanlingService {

  constructor() { }

  public handleError__(): Observable<number> {
    return of(1, 2, 3, 4, 5).pipe(
      map(n => {
        if (n === 4) {
          throw new Error('something went wrong!!!') //simulating error
        }
        return n;
      })
    )
  }
  public handleError(): Observable<number> {
    return of(1, 2, 3, 4, 5).pipe(
      map(n => {
        if (n === 4) {
          console.log('..hitting error...')
          throw new Error('something went wrong!!!') //simulating error
        }
        return n;
      }),
      retry(3),
      catchError(err => this.fallback())
    )
  }
  private fallback() {
    return of(22, 90, 78)
  }
}
