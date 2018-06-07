import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoSidebarService } from '../../core/services/todoSidebar.service';

@Component({
    selector: 'todo-item',
    templateUrl: './todoItem.component.html'
})

export class TodoItem {
    @Input() todo: Todo;
    @Input() isLastElement: number;
    @Output() deletableTodo = new EventEmitter<string>();

    constructor(private todoSidebarService: TodoSidebarService) {}

    deleteTodo() {
        this.deletableTodo.emit(this.todo.id);
    }

    showTodoDetails() {
        this.todoSidebarService.openSidebar(this.todo);
    }
}