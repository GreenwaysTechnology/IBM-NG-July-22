import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myparent',
  templateUrl: './myparent.component.html',
  styles: [
  ]
})
export class MyparentComponent implements OnInit {

  message!: string;
  constructor() { }

  ngOnInit(): void {
  }
  processClient(data: any) {
    this.message = data
  }
}
