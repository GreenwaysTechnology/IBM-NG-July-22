import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  templateUrl: './templatereference.component.html',
  styles: [
  ]
})
export class TemplatereferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  callPhone(value: any) {
    alert(value)
  }

}
