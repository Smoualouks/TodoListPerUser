import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/Model/todo';
import { TodoService } from 'src/app/shared/Service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
 constructor(private todoService:TodoService ){}
 
 ngOnInit(): void {}

  public todos: Todo[] = [
    {
        "id": "6e2cb642-4167-4a10-a107-30719a288875",
        "taskDescription": "réviser mes cours",
        "done": true,
        "category":"IMPORTANT"
    },

    {
        "id": "26e2cb642-4167-4a10-a107-30",
        "taskDescription": "Lire ma boite mail",
        "done": false,
        "category":"IMPORANT"
    },
    {
        "id": "215f80f-e361-4180-ab84-8026c3bfee88",
        "taskDescription": "ecouter le musique",
        "done": false,
        "category":"FOR_FUN"
    },
    {
        "id": "e88bd95c136-617b-4b03-96fe-17218746d279",
        "taskDescription": "appeller mon ami",
        "done": true,
        "category":"NOT_NECESSARY"
    }
    ];
    selectedTodo: any;
  
    selectTodo(selected: string) {
      this.selectedTodo = this.todos.find(p => p.taskDescription == selected);
    }
 
}
