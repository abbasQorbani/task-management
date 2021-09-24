import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    if(this.isLoggedIn === true) {
      return true;
    } else {
      return false;
    }
  }
}
