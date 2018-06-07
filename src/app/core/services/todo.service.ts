import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Subject } from 'rxjs';

@Injectable()
export class TodoService {
    newTodo = new Subject<Todo>();
    todoObservable = this.newTodo.asObservable();
    
    addNewTodo(todoName: string): void{
        this.newTodo.next(new Todo(todoName, false));
    }
}