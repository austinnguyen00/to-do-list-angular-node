import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { User } from '../../shared/models/User'
import { Task } from '../../shared/models/Task';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  @Input() user: User;
  showTasks: boolean = false;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasksByUser(this.user.nickname).subscribe(tasks => this.tasks = tasks);
  }

  // When user click arrow down button then show task
  // When click again then hide task
  toggleTasks = (): void => {
    this.showTasks = !this.showTasks;
  }
}
