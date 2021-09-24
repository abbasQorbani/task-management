import { emptyUser, User } from './../../models/user/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  loggedInUser: BehaviorSubject<User>;
  constructor() {
    this.loggedInUser = new BehaviorSubject<User>(emptyUser);
  }

  setLoggedInUser(user: User): void {
    this.loggedInUser.next(user);
  }

}
