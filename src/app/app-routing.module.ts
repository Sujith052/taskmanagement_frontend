import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { EmployeeRegComponent } from './admin/employee-reg/employee-reg.component';
import { LoginComponent } from './guest/login/login.component';
import { WorkRegComponent } from './admin/work-reg/work-reg.component';
import { WorkTaskComponent } from './admin/work-task/work-task.component';
import { AddWorktaskComponent } from './admin/add-worktask/add-worktask.component';
import { EmployeemasterComponent } from './employee/employeemaster/employeemaster.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { TaskDetailsComponent } from './employee/task-details/task-details.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { WorkDetailsComponent } from './admin/work-details/work-details.component';
import { EmployeeDataComponent } from './admin/employee-data/employee-data.component';
import { EditworkTaskComponent } from './admin/editwork-task/editwork-task.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'adminmaster', component:AdminmasterComponent,
    children:[
      {path:'adminhome', component:AdminhomeComponent},
      {path:'emp_reg', component:EmployeeRegComponent},
      {path:'work_reg', component:WorkRegComponent},
      {path:'work_task', component:WorkTaskComponent},
      {path:'add_worktask', component:AddWorktaskComponent},
      {path:'work_data', component:AddWorktaskComponent},
      {path:'work_details', component:WorkDetailsComponent},
      {path:'employee_data', component:EmployeeDataComponent},
      {path:'editwork_task/:id', component:EditworkTaskComponent},
      
    ]
  },
  {path:'employeemaster', component:EmployeemasterComponent,
    children:[
      {path:'employeehome', component:EmployeehomeComponent},
      {path:'mytasks', component:TaskDetailsComponent},
      {path:'employee_details', component:EmployeeDetailsComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
