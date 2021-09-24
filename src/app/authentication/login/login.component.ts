import { User, mockedUser } from './../../models/user/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Message } from 'src/app/models/message/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hasMessage: boolean;
  loginForm: FormGroup;
  userData: User[];
  message: Message;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private userService: UserService
  ) {
    this.hasMessage = false;
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userData = mockedUser;
    this.message = {
      type: 'danger',
      text: 'نام کاربری یا رمز عبور اشتباه است.'
    }
  }

  ngOnInit(): void {
    this.auth.isLoggedIn = false;
  }

  login(): void {
    this.userData.forEach(user => {
      if(user.userName === this.loginForm.controls['userName'].value) {
        if (user.password === this.loginForm.controls['password'].value) {
          this.auth.isLoggedIn = true;
          this.message = {
            type: 'normal',
            text: 'شما وارد حساب خود شدید.'
          };
          this.hasMessage = true;
          this.userService.setLoggedInUser(user);
          setTimeout(() => {
            this.router.navigate(['view-tasks']);
          }, 500);
        } else {
          this.hasMessage = true;
        }
      } else {
        this.hasMessage = true;
      }
    });
  }

}
