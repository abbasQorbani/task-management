import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { FormBuilder, FormsModule, ReactiveFormsModule  } from '@angular/forms';



@NgModule({
  declarations: [TaskComponent, AddEditTaskComponent],
  exports: [TaskComponent, AddEditTaskComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [FormBuilder]
})
export class TaskModule { }
