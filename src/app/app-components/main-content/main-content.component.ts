import { userEmptyTask } from './../../models/user/user-data.model';
import { emptyUser, User } from './../../models/user/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';
import { UserData, userMockedData, Task } from 'src/app/models/user/user-data.model';
import { Message } from 'src/app/models/message/message.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  user: User;
  userData: UserData[];
  tasks: Task[];
  showEdit: boolean;
  selectedTask: Task;
  changeTaskType: string;
  message: Message;
  showMessage: boolean;

  constructor(
    private userService: UserService
  ) {
    this.user = emptyUser;
    this.userData = userMockedData;
    this.tasks = [];
    this.showEdit = false;
    this.selectedTask = userEmptyTask;
    this.changeTaskType = '';
    this.message = {
      text: 'وظیفه ویرایش شد.',
      type: 'normal'
    };
    this.showMessage = false;
  }

  ngOnInit(): void {
    this.userService.loggedInUser.subscribe(user => {
      this.user = user;
    });
    this.userData.forEach(user => {
      if (user.userName === this.user.userName) {
        this.tasks = user.tasks;
      }
    });
  }

  setSelectedTaskForEdit(task: Task): void {
    this.showEdit = true;
    this.selectedTask = task;
    this.changeTaskType = 'edit';
  }

  setForAddNewTask(): void {
    this.showEdit = true;
    this.changeTaskType = 'add';
  }

  setChangeToTask(task: Task): void {
    if (this.changeTaskType === 'edit') {
      this.editTask(task)
    } else {
      this.addNewTask(task)
    }
    this.showEdit = false;
  }

  editTask(editedTask: Task): void {
    this.tasks.forEach((task, index) => {
      if (task.id === editedTask.id) {
        this.tasks[index] = editedTask;
      }
    })
    this.showMessage = true;
    this.message = {
      text: 'وظیفه ویرایش شد.',
      type: 'normal'
    }
    this.destroyMessage();
  }

  addNewTask(addedTask: Task): void {
    this.tasks.push(addedTask);
    this.showMessage = true;
    this.message = {
      text: 'وظیفه اضافه شد.',
      type: 'normal'
    }
    this.destroyMessage();
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.showMessage = true;
    this.message = {
      text: 'وظیفه حذف شد.',
      type: 'danger'
    }
    this.destroyMessage();
  }

  destroyMessage(): void {
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

}
