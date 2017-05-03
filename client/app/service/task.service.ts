import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {

  constructor(private http: Http) { }
  public getAllTasks() {
    return this.http.get('http://localhost:8000/api/tasks').map(res => res.json());
  }

  public addTask(data: any) {
    return this.http.post('http://localhost:8000/api/task', data).map(res => res.json());
  }

  public deleteTask(id: string) {
    return this.http.delete('http://localhost:8000/api/task/'+ id).map(res => res.json());
  }

  public updateTask(data: any) {
    return this.http.put('http://localhost:8000/api/task/' + data._id, data).map(res => res.json());
  }

}