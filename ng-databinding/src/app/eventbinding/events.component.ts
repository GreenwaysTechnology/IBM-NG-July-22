import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styles: [
  ]
})
export class EventsComponent implements OnInit {

  value1!:string

  value2!:string

  value3:string ="default"

  value4:string="default2" 

  constructor() { }

  ngOnInit(): void {
  }
  //methods : listerners
  onClick() {
    console.log('clicked')
  }
  onGet(message: any) {
    console.log(message)
  }
  //onInput
  onInput(evt: any) {
    //read txtvalue
    //console.log(evt.target.value)
    this.value1 = evt.target.value
  }

}
