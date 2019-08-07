import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: string = ""
  username: string;
  todoList: object[] = [];
  constructor(private todoService: TodosService, private actr: ActivatedRoute) {
    this.username = actr.snapshot.params.username;
    this.todoList = todoService.getTodosByUserame(this.username)
  }
  removeTodo(id){
    this.todoService.deleteTodo(id);
    this.todoList = this.todoService.getTodosByUserame(this.username);
  }
  createTodo(){
    this.todoService.addTodo(this.username, this.title);
    this.todoList = this.todoService.getTodosByUserame(this.username);
  }
  ngOnInit() {
  }

}
