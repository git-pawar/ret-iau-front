import { OtpComponent } from './otp/otp.component';
import { Component } from '@angular/core';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import {Route} from '@angular/router';
import { LoginGuard } from '../guards/login.guard';

export const HomeRoutes : Route[]=[
    {
        path:'',
        component:HomeComponent,
        canActivate:[LoginGuard],
        children:[
            {path:'login',component:LoginComponent},
            {path:'register',component:RegisterComponent},
            {path:'forgot',component:ForgotComponent},
            {path:'otp',component:OtpComponent}
        ]
    }
]
