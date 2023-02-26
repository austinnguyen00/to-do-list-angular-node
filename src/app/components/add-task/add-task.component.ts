import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/shared/models/Task'
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  // EventEmitter that emit added task to parent component
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // Init variables
  text: string = '';
  reminder: boolean = false;
  username: string = '';
  showAddTask: boolean = false;

  // Keep track of subsctiption to the UiService.onToggle observable
  // which is used to toggle the visibility of the add form
  subscription: Subscription = new Subscription;

  // FormGroup helps grouping multiple form controls
  // that are related
  form = new FormGroup({
    // FormControl takes care of each form component
    task: new FormControl<string>('', Validators.required),
    reminder: new FormControl<boolean>(false),
  });

  constructor(private uiService: UiService, private userService: UserService) {
    // Always listening for changes from the uiService observable to the value showAddTask 
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
    // Getting current authenticated user by subscribe to the userService
    // Only update username if there exists an authenticated user
    this.userService
      .getCurrentUser()
      .subscribe(user => this.username = user?.nickname);
  }

  onSubmit() {
    // Use EventEmitter with form value
    // Check if the form values are filled
    if (this.form.value.task !== '') {
      const newTask: Task = {
        text: this.form.value.task ? this.form.value.task : '', // check again if task value is null or undefined
        reminder: this.form.value.reminder || false,
        username: this.username
      }

      // Emit new task as output
      this.onAddTask.emit(newTask);

      // Reset the value after submission
      this.text = '';
      this.reminder = false;
      this.form.reset();
    }
    else {
      alert('Please fill in the task!');
    }
  }
}
