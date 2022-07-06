import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
  styles: [
  ]
})
export class MychildComponent implements OnInit {

  //declare custom event
  //onRequest is name of the event
  @Output()
  onRequest = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  //listener
  sendToParent() {
    //alert('sending')
    this.onRequest.emit('Hello,I am from the Child')
  }

}
