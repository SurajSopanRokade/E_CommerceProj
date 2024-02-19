import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers:[AdminService],
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.css'
})
export class AdminAuthComponent implements OnInit {
    constructor(private admin:AdminService, private router:Router){}
    ngOnInit(): void {
      return this.reloadAdmin()
    }
    signUp(data:SignUp):void{
      this.admin.userSignUp(data).subscribe((result)=>{
          if(result){
            localStorage.setItem("admin", JSON.stringify(result))
            this.router.navigate(['AdminHome'])
          }
      })
    }
    reloadAdmin(){
      if(localStorage.getItem("admin")){
        this.router.navigate(['AdminHome'])
      }
    }
}
