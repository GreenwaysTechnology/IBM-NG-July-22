import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styles: [
  ]
})
export class TemplatedrivenComponent implements OnInit {
  post: any
  categories: Array<string> = ["User interface", "MicroServices", "Devops"];

  constructor() {
    //create model object: set inital default value for the form
    this.post = new Post(Math.random(), 'Learn Angular', 'Misko', this.categories[0])
  }
 
  onSubmit() {
     console.log(this.post)
  }

  ngOnInit(): void {
  }

}
