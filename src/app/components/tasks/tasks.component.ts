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

  addTask(task: Task) {
    // Subscribe to the return observable to get the added task and
    // add/push the task to our list of tasks
    this.taskService
      .addTask(task)
      .subscribe(task => this.tasks.push(task));
    console.log("Tasks:", this.tasks);
  }
}
