import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  MyContact!: contact;
  atLeastOneCheckboxChecked(): boolean {
    return this.MyContact.Java || this.MyContact.SQL || this.MyContact.HTML || this.MyContact.CSS;
  }
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  
  ngOnInit(): void {
    this.MyContact = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender:true,
      courses:true,
      state:'',
      Java:false, 
      HTML:false, 
      CSS:false, 
      SQL:false,   
    };
    
  }
 
  onSubmit(){
    
  }
}

export class contact {
    username!:string;
      email!: string;
      password!: string;
      confirmPassword!: string;
      gender!:boolean;
      courses!:boolean;
      state!:string;

      Java!:boolean
      HTML!:boolean
      CSS!:boolean
      SQL!:boolean
      
}

