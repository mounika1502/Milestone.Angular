import { Component, OnInit,NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ModalOptions} from '@ionic/angular';
import Swal from 'sweetalert2';
import { OtpComponent } from '../otp/otp.component';

import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  'firebase/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UpdateService } from '../update.service';

var config = {
  apiKey: "AIzaSyDM4C1YRZ14Lx_8NzbDnChklv9VInrgUmw",
  authDomain: "otplogin-c4da2.firebaseapp.com",
  projectId: "otplogin-c4da2",
  storageBucket: "otplogin-c4da2.appspot.com",
  messagingSenderId: "783500853422",
  appId: "1:783500853422:web:9b813df9ba59a87c31ad3f",
  measurementId: "G-69272HMPPD"
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  login=true;
  loginForm:any   
 
  withMobile: any;
  reCaptchaVerifier: any;
  mobile1:any   
  loginData: any;
 

  visible=true;
  changetype=true;

  datas: any=[];
  showSignup = false;
  SignupForm: any;

  constructor(
    private modalCtrl: ModalController,
    private ngZone:NgZone,
    private router: Router,
    private _http:HttpClient
    ) {      
     }

  ngOnInit(): void {
    this.datas = JSON.parse(localStorage.getItem('Login') || '{}') 
    console.log(this.datas)
   
    //login form
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(5)])
    }) 
    // signup form
    this.SignupForm = new FormGroup({
      Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      Email : new FormControl('',[Validators.required,Validators.email]),
      Password : new FormControl('',[Validators.required,Validators.minLength(5)]),
      City:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      UserType:new FormControl('',[Validators.required]),
      Pincode:new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}')]),
      Street:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      State:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      Company:new FormControl('',[Validators.required]),
    });
   
    firebase.initializeApp(config)
  } 
  view(){
    this.visible = !this.visible
    this.changetype = !this.changetype
  }
  
  toggle(){
    this.login = !this.login       
  }
  toggleArrow(){
    this.withMobile = false
    this.login = true
  }
  togglePhone(){
    this.withMobile = !this.withMobile
    this.login=false
  }

  toggleSignup(){
    this.showSignup = true;
    this.login=false
  }
  toggleSignupArrow(){
    this.showSignup = false
    this.login = true
  }


  //login form submit function
  loginSubmit(data:any){
    if(this.loginForm.value.email ==''||
    this.loginForm.value.password =='')
    {
      Swal.fire(  
        'Cancelled',  
        'You Must  Enter All fields !',           //give for condition to take all properties take empty values
        'error'                                  //then take one alert message like not save all data
      ) 
  }else{
     fetch("http://localhost:2000/loginform/addlogin", {
      method:'post',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(this.loginForm.value)
    }).then(res=> res.json())
    .then(result=>{ 
      this.loginData = result
      console.log(this.loginData)      

    localStorage.setItem('Login',JSON.stringify(this.loginData));
    console.log(this.loginData)       
    
    if(result.status ==='failed'){
      Swal.fire( 
        'Cancelled',
        'Invalid username or password!',
        'error'
      )
     }else{      
      this.router.navigate(["profile"])
     } 
    })
  }    
  }

  details:any=[]
  //this is for otp based login page
   async mobileOtp(){ 

  this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'sign-in-button',
    {
      size: 'invisible',
    }
  );
  console.log(this.reCaptchaVerifier);

  console.log(this.mobile1);
  firebase
    .auth()
    .signInWithPhoneNumber(this.mobile1,this.reCaptchaVerifier)
    .then((confirmationResult:any) => {
      localStorage.setItem(
        'verificationId',
        JSON.stringify(confirmationResult.verificationId)
      );
      localStorage.setItem(
        'mobileNo',
        JSON.stringify(this.mobile1)
      );
      this.ngZone.run(() => {
        this.router.navigate(['/otp']);
      });
      alert('Otp generated..')
    })
    .catch((error:any) => {
      console.log(error.message);
      alert(error.message);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    });
  }      


 //signup submit function
 signupSubmit(){       
  if(this.SignupForm.value.Firstname ==''||
   this.SignupForm.value.Lastname ==''||
   this.SignupForm.value.mobile ==''||
   this.SignupForm.value.Email ==''||
   this.SignupForm.value.Password ==''||
   this.SignupForm.value.UserType ==''||
   this.SignupForm.value.City ==''||
   this.SignupForm.value.Pincode ==''||
   this.SignupForm.value.Street ==''||
   this.SignupForm.value.Company ==''||
   this.SignupForm.value.State ==''
   ){
   Swal.fire(  
     'Cancelled',  
     'You Must  Enter All fields !',           //give for condition to take all properties take empty values
     'error'                                  //then take one alert message like not save all data
   ) 
}else{
    
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

   if(result.status ==='failed'){
    Swal.fire( 
      'Cancelled',
      'User already registered!',
      'error'
    )
    window.location.reload()
   }else{
    Swal.fire( 'Submitted successfully!', '', 'success').then(() =>{         
      this.router.navigate(["login"])
      window.location.reload()
    })       
   }       
 })       
   .catch(error => console.log('error',error))             
}
}


  get email()
  {
   return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }


  // this is for signup form

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
  get Email()
  {
   return this.SignupForm.get('Email');
  }
  get Password()
  {
   return this.SignupForm.get('Password');
  }
  get UserType()
  {
   return this.SignupForm.get('UserType');
  }
  get City()
  {
   return this.SignupForm.get('City');
  }
  get Pincode()
  {
   return this.SignupForm.get('Pincode');
  }
  get Street()
  {
   return this.SignupForm.get('Street');
  }
  get Company()
  {
   return this.SignupForm.get('Company');
  }
  get State()
  {
   return this.SignupForm.get('State');
  }

}
