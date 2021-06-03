import { Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { Task } from './shared/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('pending') pendingComponent: TaskListComponent;
  @ViewChild('done') doneComponent: TaskListComponent;

  addOnPending(task: Task) {
    this.pendingComponent.tasks.push(task);
  }

  addOnDone(task: Task) {
    this.doneComponent.tasks.push(task);
  }
}
