import { Component, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/Task';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: 1,
    text: 'Doctors Appointment',
    reminder: true,
  };
  @Input() language: string = 'English';

  // Languages for translation
  languages: string[] = ['English', 'German', 'Russian', 'French', 'Vietnamese']

  constructor(private translateService: TranslateService) { };

  // // Method to update chosen translated language
  // updateLanguage(language: string) {
  //   this.language = language;
  //   console.log('Language updated:', this.language);
  // }

  // Method to translate text 
  translate(task: Task): void {
    // Subscribing to the Observable returned by translateService 
    this.translateService
      .translateTask(task.text, this.language)
      .subscribe(data => this.task.text = data);
  }
}
