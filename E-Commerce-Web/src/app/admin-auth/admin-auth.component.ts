import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { SignUp } from '../data-type';
import { CommonModule, JsonPipe } from '@angular/common';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  providers:[AdminService],
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.css'
})
export class AdminAuthComponent implements OnInit {
    showlogin=false;
    users:any
    admininfo:any
    isAdmin:any
    formData:any
    formData1:any
    adminmain=[{username: "Suraj Rokade",
    password: "abc@123",
    email: "suraj1234@gmail.com",
    id: 1}]
    
    constructor(private admin:AdminService, private router:Router){
      
    }
    ngOnInit(): void {
      
    }
    signUp(data:SignUp):void{
      this.admin.userSignUp(data).subscribe((result)=>{
           if(result){
          //   localStorage.setItem("admin", JSON.stringify(result))
               this.router.navigate(['AdminHome'])
           }
      })
    }
    login(data:any):void{
      // this.admin.userSignUp(data).subscribe(result=>{
        localStorage.setItem("admin", JSON.stringify(this.adminmain))
        this.users=data
        this.formData1=JSON.stringify(this.users)
        console.warn( this.formData1)
        this.formData=JSON.parse(this.formData1);
        console.warn( this.formData)
     // })
        let admininfoString:any
        admininfoString=localStorage.getItem("admin")
        this.admininfo=JSON.parse(admininfoString);
       console.log("admin info "+this.admininfo[0].username)
       console.log("users "+this.formData[0].username)
        if(this.formData[0].username===this.admininfo[0].username && this.formData[0].password===this.admininfo[0].password){
          alert("Welcome Admin")
            this.isAdmin=true;
        }
    
      if(this.isAdmin){
        
        this.router.navigate(['AdminHome'])
      }
     
    }
    // checkAdmin():boolean{
    //   console.warn(this.users)
    //     let admininfoString:any
    //     admininfoString=localStorage.getItem("admin")
    //     let admininfo=JSON.parse(admininfoString);
    //     console.log("admin info "+this.admininfo[0].username)
    //     console.log("users "+this.users[0].username)
    //     if(this.users[0].username===this.admininfo[0].username && this.users[0].password===this.admininfo[0].password){
    //         this.isAdmin=true;
    //     }
    //     return this.isAdmin
      
    // }
    openLogin(){
      this.showlogin=true
    }
    openSignUp(){
      this.showlogin=false
    }
}
