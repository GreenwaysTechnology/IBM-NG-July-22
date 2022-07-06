import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydirective',
  templateUrl: './mydirective.component.html',
  styles: [
  ]
})
export class MydirectiveComponent implements OnInit {

  numList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  isEnabled:boolean = true
  loading: boolean = true;
  status: string = "loading....."
  users: Array<any> = []

  //switch case
  input: string = ""
  feedback: string = "good"
 

  constructor() { 

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        { id: 1, name: 'a1' },
        { id: 2, name: 'a2' },
        { id: 3, name: 'a3' },
      ]
      this.loading = !this.loading;
    }, 10000)
  }
  showFeedback() {
    this.feedback = this.input
  }

}
