import { Component, inject, OnInit, signal } from '@angular/core';
import { Todo } from '../services/todo';
import { todo } from '../models/todo.type';
import { catchError, pipe } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  todosServices = inject(Todo);
  todoItems = signal<todo[]>([])

  ngOnInit(): void {
    // this.todoItems.set(this.todosServices.todoItem);
    this.todosServices.getTodoItem().pipe(catchError((error) => {
      console.log(error);
      throw error;
    })).subscribe((res) => {
      this.todoItems.set(res);
    })
  }
}
