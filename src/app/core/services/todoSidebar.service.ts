import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../../models/Todo';

@Injectable()
export class TodoSidebarService {
    selectedTodo = new Subject<Todo>();
    selectedTodoObservable = this.selectedTodo.asObservable();

    openSidebar(todo: Todo) {
        this.selectedTodo.next(todo);
    }
}