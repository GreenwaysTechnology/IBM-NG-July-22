import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styles: [
  ]
})
export class AttributebindingComponent implements OnInit {

  imageUrl: string = "favicon.ico"
  status:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
