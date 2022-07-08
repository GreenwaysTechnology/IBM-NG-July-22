import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { Alubum } from '../types/album.type';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  url: string = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  public getAlbums(): Observable<Alubum[]> {
    //we can make http call
    return this.http.get<Alubum[]>(`${this.url}/albums`).pipe(
      //retry failed request
      retry(3),
      catchError(this.handleError<Alubum[]>('getAlbums', [{ id: 0, userId: 0, title: 'foo' }]))
    )

  }
  public getAlbumsById(id: number): Observable<Alubum> {
    //we can make http call
    const myurl = `${this.url}/albums/{id}`
    console.log(myurl)
    return this.http.get<Alubum>(`${this.url}/albums/${id}`).pipe(
      //retry failed request
      retry(3),
      catchError(this.handleError<Alubum>('getAlbums', { id: 0, userId: 0, title: 'foo' }))
    )

  }
  public save(album: Alubum): Observable<Alubum> {
    console.log(album)
    const httpoptions = {

    }
    return this.http.post<Alubum>(`${this.url}/albums`, album).pipe(
      catchError(this.handleError('saveAlbum', { id: 0, userId: 0, title: 'error' }))
    )
  }


  //error handling method
  /**
   * 
   * @param operation -name of the operation that failed
   * @param result  - optional vale to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    //return observable
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed : ${error.message}`)
      return of(result as T)
    }

  }

}
