import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../types/todo.type';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit, OnDestroy {

  //place holder variable
  todos: Array<Todo> = []

  //spinner
  loading: boolean = true;
  status: string = "loading....."

  constructor(private todoService: TodoService) { }

  log(message: string) {
     console.log(message)
  }

  //init
  async ngOnInit() {
    //sync api call
    //this.todos = this.todoService.getTodos()
    //async api call using callbacks

    this.log("start")
    this.todoService.getTodosAsync((todos: Todo[]) => {
      //after 10000 ms we get data here
      this.todos = todos
      this.loading = !this.loading;
    })
    this.log("end")
    //async api call using Promises
    // this.todoService.getTodosAsyncPromise().then((todos: Todo[]) => {
    //      this.todos = todos
    //      this.loading = !this.loading;
    // }).catch(err => console.log(err))
    //async api call using promise with async await

    // try {
    //   const todos = await this.todoService.getTodosAsyncPromise()
    //   this.todos = todos
    //   this.loading = !this.loading
    // }
    // catch (err) {
    //   console.log(err)
    // }

  }
  //destroy
  ngOnDestroy(): void {
    console.log('Resource clean up method')
  }


}
