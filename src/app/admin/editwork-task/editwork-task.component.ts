import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-editwork-task',
  templateUrl: './editwork-task.component.html',
  styleUrls: ['./editwork-task.component.scss']
})
export class EditworkTaskComponent implements OnInit{
  getWorkData:any;
  getEmployeeData: any;

  taskData = {
    work :'',
    employee :'',
    projecttask :'',
    due_date :'',
    }
  taskid: any;
  getTaskData: any;

  constructor(private service:ServiceService,private router:Router,private route:ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.taskid = params.get('id')
    })
  }

  ngOnInit(): void {
  this.service.workData().subscribe((resultData: any)=>
    {
      // console.log(resultData);
      this.getWorkData = resultData;
     });
  
    this.service.employeeData().subscribe((resultData: any)=>
    {
      // console.log(resultData);
      this.getEmployeeData = resultData;
     });
    
  this.service.getTaskById(this.taskid).subscribe((resultData: any)=>
  {
    console.log(resultData);
    this.getTaskData = resultData;
    // console.log(this.getTaskData[0].empDetails.emp_name)
    this.taskData = {
        work:this.getTaskData[0].work,
        employee:this.getTaskData[0].empDetails.id,
        projecttask:this.getTaskData[0].task_details,
        due_date:this.getTaskData[0].due_date,
      }
   });

 
  }

  onSubmit(){
    const taskUpdation = new FormData()
    taskUpdation.append('work',this.taskData.work)
    taskUpdation.append('employee',this.taskData.employee)
    taskUpdation.append('projecttask',this.taskData.projecttask)
    taskUpdation.append('due_date',this.taskData.due_date)
    this.service.taskUpdation(this.taskid,taskUpdation).subscribe(response=>{
      alert('Task Updated')
      this.router.navigate(['/adminmaster/work_task']);
    })
  }
}
