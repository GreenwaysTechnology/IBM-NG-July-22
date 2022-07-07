import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreeterstreamService {

  constructor() { }

  //publisher
  public sayHello(): Observable<string> {
    return new Observable(subscriber => {
      //push data into stream
      subscriber.next("Hello")
      subscriber.next("Greet")
      subscriber.next("welcome")
      //simulate error
      //subscriber.error('something went wrong')
      subscriber.next("Hai")
      subscriber.next("how are you")
      subscriber.complete()// no more data
    })
  }

}
