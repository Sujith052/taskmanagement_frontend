import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit{

  getEmployeeData: any;
  
  constructor(private service:ServiceService,private router:Router){}

  ngOnInit(): void {
    
    this.service.employeeData().subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.getEmployeeData = resultData;
       });
  }

  
  }
