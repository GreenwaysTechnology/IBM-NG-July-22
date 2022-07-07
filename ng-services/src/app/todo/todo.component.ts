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

  //init
  ngOnInit(): void {
    //sync api call
    //this.todos = this.todoService.getTodos()
    //async api call using callbacks
    this.todoService.getTodosAsync((todos: Todo[]) => {
      //after 10000 ms we get data here
      this.todos = todos
      this.loading = !this.loading;
    })
  }
  //destroy
  ngOnDestroy(): void {
    console.log('Resource clean up method')
  }


}
