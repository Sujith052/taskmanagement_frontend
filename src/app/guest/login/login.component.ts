import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loginData = {
    username:'',
    password:'',

  }

  constructor(private service:ServiceService,private router:Router){}
  
  ngOnInit(): void {
   
  }

  onSubmit(){
  const logData = new FormData();
  logData.append("username", this.loginData.username.trim());
  logData.append("password", this.loginData.password.trim());

  // Call the signin service
  this.service.login(logData).subscribe(
    (response: any) => {
      console.log(response);

      // Check the response and navigate to the home page
      if (response?.status === 'success') {
        console.log(response.loginid);
        localStorage.setItem('loginid', response.loginid)
        localStorage.setItem('username', response.username)
        alert("Login successfully");
        if (response.role === 'admin') {
          this.router.navigate(['/adminmaster/adminhome']);
        } else if (response.role === 'employee') {
          this.router.navigate(['/employeemaster/employeehome']);
        }
      } else {
        alert("Login failed: " + (response?.message || 'Unknown error.'));
      }
    },
    (error: any) => {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  );
  }
}
