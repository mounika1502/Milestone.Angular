import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  'firebase/auth';
import 'firebase/compat/firestore';

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
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  
  withMobile: any;
  reCaptchaVerifier: any;
  mobile1:any 
  
  order:any = []

  constructor( private router:Router,private modalCtrl: ModalController,
    private ngZone:NgZone,) { }

  ngOnInit(): void {

    this.order = JSON.parse(localStorage.getItem('Order') || '{}') 
    console.log(this.order)

    firebase.initializeApp(config)
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

}
