import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm:any;
  login=true;
  loginForm:any

  SignupForm = new FormGroup({
    Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  constructor() { }

  ngOnInit(): void {
  }
  
  
  toggle(){
    this.login = !this.login
    this.signupForm =false        
  }

  toggleregister(){
    this.signupForm = !this.signupForm
    this.login=false
  }

  //signup submit function
  submit(){

  }

  get Firstname()
  {
   return this.SignupForm.get('Firstname');
  }
  get Lastname()
  {
   return this.SignupForm.get('Lastname');
  }
  get mobile()
  {
   return this.SignupForm.get('mobile');
  }
  get email()
  {
   return this.SignupForm.get('email');
  }
  get password()
  {
   return this.SignupForm.get('password');
  }

}
