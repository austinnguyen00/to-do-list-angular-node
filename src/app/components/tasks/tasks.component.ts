import { Component } from '@angular/core';
import { Task } from 'src/Task';
import { TASKS } from 'src/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
