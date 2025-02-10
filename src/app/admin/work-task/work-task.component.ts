import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-work-task',
  templateUrl: './work-task.component.html',
  styleUrls: ['./work-task.component.scss']
})
export class WorkTaskComponent implements OnInit{

  WorkId: string = '';
  EmployeeId: string = '';

  getTaskData: any;
  getWorkData: any;
  getEmployeeData: any;
  
  constructor(private service:ServiceService,private router:Router){}

  ngOnInit(): void {
    this.service.getEmpTasks().subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.getTaskData = resultData;
       });
    
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

  onChange(event: Event): void{
    this.EmployeeId = (event.target as HTMLSelectElement).value;
    
    // Log or use the workId and employeeId as needed
    console.log(`Work ID: ${this.WorkId}, Employee ID: ${this.EmployeeId}`);
    this.service.getSearchwiseTask(this.WorkId,this.EmployeeId).subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.getTaskData = resultData;
      });
  }

  delete(id:number){
    this.service.deleteTask(id).subscribe((response:any)=>{
      alert("Deleted Sucessfully")
      location.reload()
      this.router.navigate(['/adminmaster/work_task']);
    })

  }
}
