import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = "http://127.0.0.1:8000/api/";

  constructor(private http:HttpClient) { }

  // Employee registration
  empReg(employeeData:FormData) :Observable<any>{
    return this.http.post(`${this.baseUrl}emp_reg`,employeeData);
  }
  // add work  
  workReg(workData:FormData) :Observable<any>{
    return this.http.post(`${this.baseUrl}work_reg`,workData);
  }
  // add task
  add_task(workData:FormData) :Observable<any>{
    return this.http.post(`${this.baseUrl}add_task`,workData);
  }
  // get workdata
  workData(){
    return this.http.get(`${this.baseUrl}get_workdata`);
  }
  // get taskdata
  employeeData(){
    return this.http.get(`${this.baseUrl}get_employeedata`);
  }
  // login service
  login(logData:FormData) :Observable<any>{
    return this.http.post(`${this.baseUrl}login`,logData);
  }
  // employee get task data
  getEmpTasks(){
    return this.http.get(`${this.baseUrl}get_emptaskdata`);
  }
  // update work task
  updateTask(id:any){
    return this.http.get(`${this.baseUrl}updatetask/${id}`);
  }
  // get searchwise tasklist
  getSearchwiseTask(WorkId: any, EmployeeId: any) {
    return this.http.get(`${this.baseUrl}getsearchwise_task/${WorkId}/${EmployeeId}`);
  }
  // get statuswise tasklist
  getStatuswiseTask(status: any) {
    return this.http.get(`${this.baseUrl}getstatuswise_task/${status}`);
  }
  // get task by id
  getTaskById(id:any){
    return this.http.get(`${this.baseUrl}gettaskby_id/${id}`);
  }
  // update task
  taskUpdation(id:any,taskUpdation:FormData){
    return this.http.post(`${this.baseUrl}update_task/${id}`,taskUpdation)
  }
  // delete task
  deleteTask(id:any){
    return this.http.delete(`${this.baseUrl}add_task/${id}`)
  }
   // get task by id
   getEmployeeTasks(id:any){
    return this.http.get(`${this.baseUrl}getemployeetasks/${id}`);
  }
}
