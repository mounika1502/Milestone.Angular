import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  
  signupForm=false;

 


  constructor() { }

  ngOnInit(): void {
  }
  sub:any
  subdata:any

  

  

  // toggle(){
  //   this.loginForm = !this.loginForm
  //   this.signupForm=false;
  //   this.loginForm=true;
  // }

  // toggleregister(){
   
  //   this.signupForm = !this.signupForm
  //   this.signupForm=true;
  //   this.loginForm=false;
  // }

  submit(){

  }

  //signup form
 
  
}
