import { Todo } from 'src/app/shared/Model/todo';
import { TodoService } from 'src/app/shared/Service/todo.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Output()
  emitter = new EventEmitter<string>();

  @Input() todos: any[] = [];
  @Input() todo: any;
  
  onTodoSelected(selected: string) {
    this.emitter.emit(selected);
  }

}
