import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/Task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.apiUrl + '/tasks';

  constructor(private http: HttpClient) { }

  // Method to retrieve user tasks from backend which will return an obserable of type task
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Method add new task to database
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // Method ot retrieve tasks by username 
  getTasksByUser(username: string | null | undefined): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + '/' + username);
  }
}
