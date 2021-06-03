import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Task } from '../shared/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task = new Task();
  @Input() isCancel: boolean = false;
  @Output() action: EventEmitter<Task> = new EventEmitter();

  @ViewChild("closebutton") closebutton: ElementRef;

  password: string = "";
  hasError: boolean = false;
  msgError: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  taskAction() {
    this.hasError = false;
    this.msgError = "";

    console.log(this.task.hasCanceled);

    if (this.isCancel) {
      if (this.task.isDone && this.task.hasCanceled) {
        this.hasError = true;
        this.msgError = "Você não pode cancelar a conclusão dessa tarefa!";
      } else if (this.password == "TrabalheNaSaipos") {
        this.closebutton.nativeElement.click();
        this.task.hasCanceled = true;
        this.task.isDone = false;
        this.action.emit(this.task);
      } else {
        this.hasError = true;
        this.msgError = "Senha inválida!";
      }
    } else {
      this.task.isDone = true;
      console.log(this.task);
      this.action.emit(this.task);
    }
  }
}
