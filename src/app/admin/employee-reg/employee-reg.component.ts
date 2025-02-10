import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.scss']
})
export class EmployeeRegComponent implements OnInit{

  employeeData = {
    employee_name :'',
    employee_email:'',
    job_position:'',
    employee_contactno:'',
    username:'',
    password:'',

  }

  constructor(private service:ServiceService,private router:Router){}
  
  ngOnInit(): void {
  }

  onSubmit(){
    const employeeData = new FormData(); 
    employeeData.append("employee_name", this.employeeData.employee_name)
    employeeData.append("employee_email", this.employeeData.employee_email)
    employeeData.append("job_position", this.employeeData.job_position)
    employeeData.append("employee_contactno", this.employeeData.employee_contactno)
    employeeData.append("username", this.employeeData.username)
    employeeData.append("password", this.employeeData.password)
    this.service.empReg(employeeData).subscribe(
      (response) => {
        console.log(response)
        alert("registration successfully")
        this.router.navigate(['/adminmaster/employee_data']);
      },
      (error) => {
        alert("registration failed");

      }
    )
  }

}
