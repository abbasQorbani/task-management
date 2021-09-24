import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserData, Task, userEmptyTask } from 'src/app/models/user/user-data.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter();


  constructor() {
    this.task = userEmptyTask;
  }

  ngOnInit(): void {
  }

  setForEdit(task: Task) {
    this.edit.emit(task);
  }

  deleteTask() {
    this.delete.emit();
  }

}
