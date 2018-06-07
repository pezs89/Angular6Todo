import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../core/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'todo-list',
    templateUrl: './todoList.component.html'
})

export class TodoList implements OnInit, OnDestroy {
    public todoList: Todo[] = [];
    private subscribtion: Subscription;
    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.subscribtion = this.todoService.todoObservable.subscribe(newTodo => {
            this.todoList.push(newTodo)
        })
    }

    deleteTodo(id: string) {
        this.todoList = this.filterList(id);
    }

    filterList(id: string) {
        return this.todoList.filter(todo => todo.id !== id);
    }

    ngOnDestroy() {
        this.subscribtion.unsubscribe();
    }
}