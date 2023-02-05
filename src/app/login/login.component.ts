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
  logindata:any=[] 
  data: any;
  withMobile: any;
  mobileForm: any;  
  reCaptchaVerifier: any;
  mobile1:any  
  List:any=[]
  numbers: any=[];
  loginData: any=[]
  final: any=[]

  constructor(
    private modalCtrl: ModalController,
    private ngZone:NgZone,
    private router: Router,
    private _http:HttpClient
    ) { }

  ngOnInit(): void {
    //login form
    this.loginForm = new FormGroup({
      Email : new FormControl('',[Validators.required,Validators.email]),
      Password : new FormControl('',[Validators.required,Validators.minLength(5)]),      
    })

    firebase.initializeApp(config)
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


  //login form submit function
  loginSubmit(data:any){
     fetch("http://localhost:2000/loginform/addlogin", {
      method:'post',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(this.loginForm.value)
    }).then(res=> res.json())
    .then(result=>{ 
      this.final = result
      console.log(this.final)
      
      this.loginData.push(this.final)
      localStorage.setItem('Login',JSON.stringify(this.loginData));        
    
    if(result.status ==='failed'){
      Swal.fire( 
        'Cancelled',
        'Invalid username or password!',
        'error'
      )
     }else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'submitted successfully',
        showConfirmButton: false,
        timer: 1500       
      })
     }
    })
  }

  details:any=[]

  getProduct(){    
    fetch("http://localhost:2000/signupform/getsignupdetails", {
   method:'get', 
    }).then(res=> res.json())
    .then(result=>{ 
    console.log(result)
    this.details = result.find((item:any) =>{
    return item.Email === this.loginForm.value.Email && item.Password === this.loginForm.value.Password
     
  }   
   ) 
   console.log(this.details) 
   if(this.details){
         alert("Login is successfull");
        this.loginForm.reset();
       this.router.navigate(['homepage'])
       }else{
         alert('User not found !!')
        }
      })
    }

 

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
      

  get Email()
  {
   return this.loginForm.get('Email');
  }
  get Password()
  {
    return this.loginForm.get('Password');
  }

}
