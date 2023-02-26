import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private userService: UserService) { }

  ngOnInit(): void {
    // First calling getCurrentUser service and subscribe to the observable
    // to get the current user
    // Then calling taskService getTasksByUser method and then
    // subscribe to the return observable to get the tasks belong to the user if the user exists
    this.userService.getCurrentUser()
      .subscribe(user => this.taskService
        .getTasksByUser(user?.nickname)
        .subscribe(data => this.tasks = data));
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
