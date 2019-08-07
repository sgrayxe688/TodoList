import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  username: string = "";
  title: string = "";
  todoList: object[] = [];
  constructor(private todoService: TodosService) {
    this.todoList = todoService.getAllTodos();
    console.log(this.todoList);
  }
  removeTodo(id){
    this.todoService.deleteTodo(id);
  }
  createTodo(){
    this.todoService.addTodo(this.username, this.title);
  }
  ngOnInit() {
  }

}
