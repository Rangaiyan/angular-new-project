import { inject, Injectable } from '@angular/core';
import { todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  http = inject(HttpClient);
  todoItem: Array<todo> = [{
    userId: 1,
    id: 1,
    title: "Todo 1",
    completed: false
  }, {
    userId: 1,
    id: 2,
    title: "Todo 2",
    completed: true
  }, {
    userId: 1,
    id: 3,
    title: "Todo 3",
    completed: false
  }
  ];
  constructor() {
  }

  getTodoItem() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<todo>>(url);
  }
}
