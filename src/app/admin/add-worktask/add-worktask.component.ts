import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-worktask',
  templateUrl: './add-worktask.component.html',
  styleUrls: ['./add-worktask.component.scss']
})
export class AddWorktaskComponent implements OnInit{
  getWorkData:any;
  getEmployeeData: any;

  taskData = {
    work :'',
    employee :'',
    projecttask :'',
    due_date :'',
    }

  constructor(private service:ServiceService,private router:Router){}

  ngOnInit(): void {
  this.service.workData().subscribe((resultData: any)=>
  {
    console.log(resultData);
    this.getWorkData = resultData;
   });

  this.service.employeeData().subscribe((resultData: any)=>
  {
    console.log(resultData);
    this.getEmployeeData = resultData;
   });
  }

  onSubmit(){
    const taskData = new FormData(); 
    taskData.append("work", this.taskData.work)
    taskData.append("employee", this.taskData.employee)
    taskData.append("projecttask", this.taskData.projecttask)
    taskData.append("due_date", this.taskData.due_date)
    this.service.add_task(taskData).subscribe(
      (response) => {
        console.log(response)
        console.log("hai")
        alert("registration successfully")
        this.router.navigate(['/adminmaster/work_task']);
      },
      (error) => {
        alert("registration failed");

      }
    )
  }
}
