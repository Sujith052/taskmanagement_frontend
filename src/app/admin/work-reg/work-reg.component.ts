import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-work-reg',
  templateUrl: './work-reg.component.html',
  styleUrls: ['./work-reg.component.scss']
})
export class WorkRegComponent implements OnInit{

  workData = {
    projectname :'',
    }
  
  constructor(private service:ServiceService,private router:Router){}

  ngOnInit(): void {
  }

  onSubmit(){
    const workData = new FormData(); 
    workData.append("projectname", this.workData.projectname)
    this.service.workReg(workData).subscribe(
      (response) => {
        console.log(response)
        alert("Work added successfully")
        this.router.navigate(['/adminmaster/work_details']);
      },
      (error) => {
        alert("Work added failed");

      }
    )
  }

}
