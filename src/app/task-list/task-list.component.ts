import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { AnimalFactsService } from '../shared/service/animal-facts.service';
import { MailCheckService } from '../shared/service/mail-check.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() title: string = "";
  @Input() showAddTask: boolean = true;
  @Input() showWithoutTask: boolean = true;
  @Input() isCancel: boolean = false;

  @Output() action: EventEmitter<Task> = new EventEmitter();

  hasError: boolean = false;
  msgError: string = "";

  accountable: string = "";
  email: string = "";
  description: string = "";

  tasks: Task[] = [];

  constructor(
    public mailCheckService: MailCheckService,
    public animalFactsService: AnimalFactsService
  ) { }

  ngOnInit(): void {
  }

  addTask() {
    this.hasError = false;
    this.msgError = "";

    if (this.accountable == "" || this.email == "" || this.description == "")
      return;

    this.mailCheckService
      .checkIfMailIsValid(this.email)
      .subscribe(data => {
        if (data.format_valid && data.mx_found) {
          var task = new Task();
          task.description = this.description;
          task.accountable = this.accountable;
          task.email = this.email;
          this.tasks.push(task);

          this.clear();
        } else if (data.format_valid && !data.mx_found) {
          this.hasError = true;
          this.msgError = "Dominio inválido, você quis dizer " + data.did_you_mean;
        } else {
          this.hasError = true;
          this.msgError = "E-mail inválido";
        }
      });
  }

  clear() {
    this.accountable = "";
    this.email = "";
    this.description = "";
  }

  getRandomDogFacts() {
    this.animalFactsService
      .getRandomDogFacts()
      .subscribe(data => {
        if (data) {
          data.forEach(fact => {
            var task = new Task();
            task.description = fact.text;
            task.accountable = "Eu";
            task.email = "eu@me.com";

            this.tasks.push(task);
          });
        }
      });

    console.log(this.tasks);
  }

  removeTaskFromList(task: Task) {
    this.tasks.forEach((item, index) => {
      if (item === task) {
        this.tasks.splice(index, 1);
        this.action.emit(task);
      }
    })
  }
}
