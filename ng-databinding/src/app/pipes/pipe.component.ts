import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {

  today: Date = new Date()
  name: string = "subramanian"
  price: number = 1000.770
  stock: number = 900.7834

  user = {
    id: 1,
    name: 'subramanian',
    city: 'Coimbatore'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
