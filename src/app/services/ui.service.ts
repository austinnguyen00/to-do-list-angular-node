import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  // Subject is a special type of observable that allows values to be multicasted
  // to many observers
  // Subjects are like EventEmitters: they maintain a registry of many listeners
  private subject = new Subject<boolean>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    // Emit new value through subject observable whenever 
    // showAddTask is updated
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
