import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { EmployeeRegComponent } from './admin/employee-reg/employee-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './guest/login/login.component';
import { EmployeemasterComponent } from './employee/employeemaster/employeemaster.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { WorkRegComponent } from './admin/work-reg/work-reg.component';
import { WorkTaskComponent } from './admin/work-task/work-task.component';
import { AddWorktaskComponent } from './admin/add-worktask/add-worktask.component';
import { TaskDetailsComponent } from './employee/task-details/task-details.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { WorkDetailsComponent } from './admin/work-details/work-details.component';
import { EmployeeDataComponent } from './admin/employee-data/employee-data.component';
import { EditworkTaskComponent } from './admin/editwork-task/editwork-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminmasterComponent,
    AdminhomeComponent,
    EmployeeRegComponent,
    LoginComponent,
    EmployeemasterComponent,
    EmployeehomeComponent,
    WorkRegComponent,
    WorkTaskComponent,
    AddWorktaskComponent,
    TaskDetailsComponent,
    EmployeeDetailsComponent,
    WorkDetailsComponent,
    EmployeeDataComponent,
    EditworkTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
