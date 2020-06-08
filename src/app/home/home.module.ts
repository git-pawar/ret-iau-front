import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotComponent, OtpComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
