import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { userEmptyTask, Task } from 'src/app/models/user/user-data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {
  @Input() type: string;
  @Input() task: Task;
  @Output() formChanged = new EventEmitter<Task>();
  buttonText: string;
  taskForm: FormGroup;
  id: number;
  formIsInvalid: boolean;

  constructor(
    private fb: FormBuilder
  ) {
    this.type = '';
    this.task = userEmptyTask;
    this.id = this.task.id;
    this.formIsInvalid = true;
    this.buttonText = '';
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      person: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.taskForm.statusChanges.subscribe(value => {
      if (value === 'VALID') {
        this.formIsInvalid = false;
      }
    })
    if (this.type === 'add') {
      this.buttonText = 'اضافه کردن';
    } else {
      this.taskForm.controls['title'].patchValue(this.task.title);
      this.taskForm.controls['person'].patchValue(this.task.person);
      this.taskForm.controls['description'].patchValue(this.task.description);
      this.taskForm.controls['priority'].patchValue(this.task.priority);
      this.buttonText = 'ویرایش';
    }
  }

  fireChange(): void {
    this.task = {
      description: this.taskForm.controls['description'].value,
      id: this.id,
      person: this.taskForm.controls['person'].value,
      priority: this.taskForm.controls['priority'].value,
      title: this.taskForm.controls['title'].value
    }
    this.formChanged.emit(this.task);
  }

}
