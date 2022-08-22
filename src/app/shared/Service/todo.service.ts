import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = environment.urlApi + '/todos';

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }
  
  public findByCtegory(category: string) {
    return this.http.get<Todo>(this.baseUrl + '/' + category);
  }
  /*
  public deleteById(id: string) {
    return this.http.delete<Todo>(this._baseUrl + '/' + id);
  }

  public createOne(todo: Todo) {
    return this.http.post<Todo>(this._baseUrl, todo);
  }

  public updateOne(todo: Todo) {
    return this.http.put<Todo>(this._baseUrl + '/' + todo.id, todo);
  
  }
*/
}
