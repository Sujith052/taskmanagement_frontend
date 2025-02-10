import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit{

  workData = {
    projectname :'',
    }

  getTaskData: any;
  status: string = '';
  
  constructor(private service:ServiceService,private router:Router){}

  ngOnInit(): void {
    const id = localStorage.getItem("loginid");
    console.log(id)
    this.service.getEmployeeTasks(id).subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.getTaskData = resultData;
       });
  }

  onChange(event: Event): void{
    this.status = (event.target as HTMLSelectElement).value;
    
    this.service.getStatuswiseTask(this.status).subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.getTaskData = resultData;
      });
  }

  update(id:any){
    console.log(id)
    this.service.updateTask(id).subscribe((resultData: any)=>
      {
        console.log(resultData);
        // this.getSlotArray = resultData;
        if (resultData.message === 'success') {
          alert("Updated successfully")
          location.reload();
          this.router.navigate(['/employeemaster/mytasks']);
          }
      });
   }
  }

