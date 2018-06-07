import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Todo } from "../../models/Todo";
import { TodoSidebarService } from '../../core/services/todoSidebar.service';

@Component({
    selector: 'todo-sidebar',
    templateUrl: 'todoSidebar.component.html'
})

export class TodoSidebar implements OnInit, OnDestroy {
    private selectedTodo: Todo;
    private subscription: Subscription;

    constructor(private todoSidebarService: TodoSidebarService) { }

    ngOnInit() {
        this.subscription = this.todoSidebarService.selectedTodoObservable.subscribe(todo => {
            this.selectedTodo = todo;
        });
    }

    closeSidebar() {
        this.selectedTodo = undefined;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

