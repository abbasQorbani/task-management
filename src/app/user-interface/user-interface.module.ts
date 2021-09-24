import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message/message.component';
import { TaskModule } from './task/task.module';

@NgModule({
  imports: [
    CommonModule,
    TaskModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class UserInterfaceModule {}
