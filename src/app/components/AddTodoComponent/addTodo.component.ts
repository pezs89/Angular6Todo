import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from '../../core/services/todo.service';

@Component({
    selector: 'add-todo',
    templateUrl: './addTodo.component.html'
})

export class AddTodoComponent {
    @ViewChild('newTodoInput') private el: ElementRef;
    private isValid: boolean = false;

    constructor(public todoService: TodoService) { }


    addNewTodo(newTodo: string): void {
        this.todoService.addNewTodo(newTodo);
        this.el.nativeElement.value = '';
        this.setValidity(this.el.nativeElement.value);
    }

    setValidity(value: string): void {
        this.isValid = value.length === 0 ? false : true;
    }
}  