import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guard/authentication.guard';
import { UserInterfaceModule } from '../user-interface/user-interface.module';
import { FormBuilder, FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserInterfaceModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationGuard, AuthenticationService, FormBuilder, UserService]
})
export class AuthenticationModule { }
