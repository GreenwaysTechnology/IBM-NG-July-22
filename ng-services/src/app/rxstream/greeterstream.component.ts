import { Component, OnInit } from '@angular/core';
import { GreeterstreamService } from './greeterstream.service';

@Component({
  selector: 'app-greeterstream',
  templateUrl: './greeterstream.component.html',
  styles: [
  ]
})
export class GreeterstreamComponent implements OnInit {

  data:string[]=[]

  constructor(private greeterService: GreeterstreamService) { }

  ngOnInit(): void {
    //subscribe
    //  this.greeterService.sayHello().subscribe(data=>{},err=>{},()=>{})
    this.greeterService.sayHello().subscribe({
      next: (data) => {
        console.log('next=>',data)
       // this.data = data
        this.data.push(data)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
         console.log('Stream is completed')
      }
    })
  }

}
