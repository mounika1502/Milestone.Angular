import { Component, OnInit, ViewChildren,ElementRef, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



@Component({
  selector: 'app-otp',
  
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
@ViewChildren('formRow') rows: any;

  otp:any;
  form: any;
  spin!: boolean;
  verify: any;

  data: any;
  total:any=[]
  mobileNo: any;
  verified: any;


  
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '45px',
      height: '45px',
    },
  };

  
  keyUpEvent(event:any, index:any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
     pos = index - 1 ;
    } else {
     pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
     this.rows._results[pos].nativeElement.focus();
    }
   }

   constructor(private router:Router,private ngZone: NgZone) {
     this.form = this.toFormGroup(this.formInput);
   }
  
   

   toFormGroup(elements:any) {
    const group: any = {};
    elements.forEach((key: string | number) => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
   } 

  ngOnInit(): void {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    this.mobileNo = JSON.parse(localStorage.getItem('mobileNo') || '{}');
    console.log(this.verify)

    this.verified = JSON.parse(localStorage.getItem('regdata') || '{}')
    console.log(this.verified.role)

    //getting the phone number
    // this.data=JSON.parse(localStorage.getItem('mobileNo')||'{}')   
    // this.total=this.data
    // console.log(this.total)  
  

  }

  onOtpChange(otp:string){
    this.otp = otp;
    console.log(this.otp);
  }

 
  onSubmit(){
    console.log(this.form.value);
    
    console.log(this.otp);
      var credential = firebase.auth.PhoneAuthProvider.credential(
        this.verify,
        this.otp
      );
  
      console.log(credential);
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((response: any) => {
          console.log(response);
          localStorage.setItem('user_data', JSON.stringify(response));
         this.ngZone.run(() => {
            
       setTimeout(() => {
        this.spin=false
        this.router.navigate(['/inventory'])
      }, 2000);    
    });
    })
      .catch((error: { message: any; }) => {
      console.log(error);
      setTimeout(() => {
          this.spin=false
          alert(error.message);
        }, 2000);           
      });
  }

}
