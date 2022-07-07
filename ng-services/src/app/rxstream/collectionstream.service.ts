import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TODOS } from '../mockdata/todos';

@Injectable({
  providedIn: 'root'
})
export class CollectionstreamService {

  constructor() { }

  public getList(): Observable<number> {
    //create stream, stream array items
    let list = [10, 20, 40, 23, 11, 34, 33, 78, 100]
    //stream processing : i want to stream only odd numbers to subscriber
    return from(list).pipe(
      filter(item => item % 2 !== 0)

    )
  }
  public getTodos() {
    return from(TODOS).pipe(
      filter(todo => todo.completed),
      filter(todo => todo.id % 2 === 0),
      map(todo => ({
        userId: todo.userId,
        id: todo.id,
        title: todo.title.toUpperCase(),
        completed: todo.completed
      }))

    )
  }
}
