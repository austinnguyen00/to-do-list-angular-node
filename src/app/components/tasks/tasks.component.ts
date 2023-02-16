import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Calling taskService getTasks method and then
    // subscribe to the return observable where
    // subscribe method first argument is data from the observable
    this.taskService
      .getTasks()
      .subscribe(data => this.tasks = data);
  }
}
