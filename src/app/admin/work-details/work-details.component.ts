import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit{

  getWorkData: any;
  
  constructor(private service:ServiceService,private router:Router){}

  ngOnInit(): void {
    this.service.workData().subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.getWorkData = resultData;
       });
  }

  
  }
