import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamiccss',
  templateUrl: './dynamiccss.component.html',
  styles: [
  ]
})
export class DynamiccssComponent implements OnInit {

  highlight: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  //high light
  highLight() {
    this.highlight = !this.highlight
  }

}
