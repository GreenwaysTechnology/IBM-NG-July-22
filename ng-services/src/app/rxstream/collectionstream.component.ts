import { Component, OnInit } from '@angular/core';
import { CollectionstreamService } from './collectionstream.service';

@Component({
  selector: 'app-collectionstream',
  templateUrl: './collectionstream.component.html',
  styles: [
  ]
})
export class CollectionstreamComponent implements OnInit {

  constructor(private cStreamService: CollectionstreamService) { }

  ngOnInit(): void {
    //stream 
    this.cStreamService.getList().subscribe({
      next: (data) => {
        console.log('next=>', data)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('Stream is completed')
      }
    })

    this.cStreamService.getTodos().subscribe({
      next: (data) => {
        console.log('next=>', data)
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
