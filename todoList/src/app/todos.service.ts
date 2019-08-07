import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: object[] = [
  {id: 1, title: 'Wash the dog', username: 'Mike'},
  {id: 2, title: 'Wash the cat', username: 'Mike'},
  {id: 3, title: 'Wash the elephant', username: 'John'},
  {id: 4, title: 'Wash the horse', username: 'Mike'},
  {id: 5, title: 'Wash the rhino', username: 'John'},
  ];
  private nextId: number = 6;
  constructor() { }
  getAllTodos() {
    return this.todos;
  }
  getTodosByUserame(uname) {
    // tslint:disable-next-line: no-string-literal
    return this.todos.filter(todo => todo['username'] === uname);
  }
  addTodo(uname, todoTitle){
    let newTodo = {
      id: this.nextId,
      title: todoTitle,
      username: uname
    };
    this.nextId++;
    this.todos.push(newTodo);
  }
  deleteTodo(id) {
    // tslint:disable-next-line: prefer-const
    let idx = this.todos.findIndex(todo => todo['id'] === id);
    this.todos.splice(idx, 1);
  }

}
