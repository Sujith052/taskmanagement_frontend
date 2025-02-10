import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrls: ['./employeemaster.component.scss']
})
export class EmployeemasterComponent implements OnInit{
  
  username:any;

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }
}
