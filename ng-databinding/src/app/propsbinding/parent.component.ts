import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  // styles: [

  // ]
})
export class ParentComponent implements OnInit {

  //state
  //primitive variable
  name: string = "Subramanian"

  //object
  address = {
    city: 'Coimbatore'
  }
  skills: Array<string> = ["javascript", "Angular", "Typescript"]
  constructor() { }

  ngOnInit(): void {
  }

}
