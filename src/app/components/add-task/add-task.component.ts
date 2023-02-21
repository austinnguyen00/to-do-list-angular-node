import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Task } from 'src/app/shared/models/Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  // EventEmitter that emit added task to parent component
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // Init variables for task component
  text: string = '';
  reminder: boolean = false;

  // FormGroup helps grouping multiple form controls
  // that are related
  profileForm = new FormGroup({
    // FormControl takes care of each form component
    task: new FormControl<string>('', Validators.required,),
    reminder: new FormControl<boolean>(false),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // Check if the form values are filled
    if (this.profileForm.value.task) {
      const newTask: Task = {
        text: this.profileForm.value.task,
        reminder: this.profileForm.value.reminder || false,
      }

      // Emit new task as output
      this.onAddTask.emit(newTask);

      // Reset the value after submission
      this.text = '';
      this.reminder = false;
    }
    else {
      alert('Please fill in the task!');
    }
  }
}
