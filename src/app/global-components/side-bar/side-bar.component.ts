import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { UserService } from 'src/app/authentication/services/user.service';
import { SideBarItem, sideBarItems } from 'src/app/models/sidebar/sidebar.model';
import { emptyUser, User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  sideBarItem: SideBarItem[];
  pathName: string;
  user: User;

  constructor(
    private userService: UserService,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.sideBarItem = [];
    this.pathName = '';
    this.user = emptyUser;
  }

  ngOnInit(): void {
    this.userService.loggedInUser.subscribe(user => {
      this.user = user;
    });
    this.sideBarItem = sideBarItems;
    this.pathName = window.location.pathname;
  }

  exit(): void {
    this.auth.isLoggedIn = false;
    this.router.navigate(['login']);
  }

}
