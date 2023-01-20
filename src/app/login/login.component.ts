import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm:any;
  login=true;
  loginForm:any
  SignupForm!:FormGroup  


data: any;
  withMobile: any;
  mobileForm: any;
  

  constructor() { }

  ngOnInit(): void {
   //signup form
    this.SignupForm = new FormGroup({
      Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(5)])
    });
    console.log(this.SignupForm)

    //login form
    this.loginForm = new FormGroup({
      Email : new FormControl('',[Validators.required,Validators.email]),
      Password : new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  //login with mobile otp form
    this.mobileForm = new FormGroup({
      mobile1 : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])

    })
  }
   
  
  toggle(){
    this.login = !this.login
    this.signupForm =false        
  }

  toggleregister(){
    this.signupForm = !this.signupForm
    this.login=false
  }
  togglePhone(){
    this.withMobile = !this.withMobile
    this.login=false
  }

  //login form submit function
  loginSubmit(){
    if(this.loginForm.invalid){
      return
    fetch("http://localhost:2000/loginform/addlogin", {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.loginForm.value)
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
       alert('Successfully Submited....')
     }
       )     
       .catch(error => console.log('error',error)) 
    }
    else{
      window.location.href="/homepage"
    }  

  }
  

  //signup submit function
  submit(){

    console.log(this.SignupForm) 
        fetch("http://localhost:2000/signupform/addsignupdetails", {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.SignupForm.value)
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
       alert('Successfully Submited')
     }
       )     
       .catch(error => console.log('error',error))   
   
//this function for showing success message after submitting the form
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your data has been saved',
      showConfirmButton: false,
      timer: 1500
    }) 


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

  get Email()
  {
   return this.loginForm.get('Email');
  }
  get Password()
  {
    return this.loginForm.get('Password');
  }

  get mobile1()
  {
   return this.mobileForm.get('mobile1');
  }

}
