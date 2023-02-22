import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showAddTask: boolean = false;

  // Keep track of subsctiption to the UiService.onToggle observable
  // which is used to dynamically update the button
  subscription: Subscription = new Subscription;

  constructor(private uiService: UiService) {
    // Always listening for changes from the uiService observable to the value showAddTask 
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  toggleAddTask() {
    console.log('toggleTask')
    this.uiService.toggleAddTask();
  }
}
