import { Injectable } from '@angular/core';
import { TODOS } from '../mockdata/todos';
import { Todo } from '../types/todo.type';
/**
 * Injector:
 *    It is low level program whoes responsible for creating objects
 * Injector receives information(what are classes), based on that information, injector will create instances(object)
 * In general , we configure classes(component,directive,pipe,module class) inside modules via declarations,imports,providers.
 * Injector receives information from the modules, then accordingly objects will be created
 * 
 * Types of injector
 * 1.global injector called root injector
 * 2.sub module injector 
 * 3.component level injector
 * 
 */
@Injectable({
  providedIn: 'root' //you are telling that this service object should be created by root injector
})
export class TodoService {
  constructor() { }

  //sync - biz method
  public getTodos(): Array<Todo> {
    return TODOS;
  }
  //async version -using callback
  public getTodosAsync(callback: Function) {
      //async api
      setTimeout(callback,10000,TODOS)
  }

}
