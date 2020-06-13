import { AuthService } from './services/auth.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MessageService } from './message.service';
import { HttpErrorHandler } from './http-error-handler.service';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './home/otp/otp.component';
import { NoPageComponent } from './no-page/no-page.component';


import {routes} from './app.router';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './guards/auth.guard';
import { PatientlistComponent } from './dashboard/patientlist/patientlist.component';
import { AddpatientComponent } from './dashboard/addpatient/addpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DashboardComponent,
    HomeComponent,
    NoPageComponent,
    PatientlistComponent,
    AddpatientComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    CommonModule,
    HomeModule,
    DashboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,AuthGuard,HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
