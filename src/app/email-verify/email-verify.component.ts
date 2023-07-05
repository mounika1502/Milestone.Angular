import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {
  Form: any;
  mouni: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.Form = new FormGroup({
      Email : new FormControl("")
    })
  }

  login(){
    this.router.navigate(["/login"])
  } 
  
  //login form submit function
  submit(){
    if( this.Form.value.Email ==''
    ){
    Swal.fire(  
      'Cancelled',  
      'You Must Enter Your Email !',           //give for condition to take all properties take empty values
      'error'                                  //then take one alert message like not save all data
    ) 
 }
 else{
     fetch("https://milestone-096608973980.herokuapp.com/auth/getsignupdetail", {
      method:'post',
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type":'application/json'
      },
      body:JSON.stringify(this.Form.value)
    }).then(res=> res.json())
    .then(result=>{  
      console.log(result) 
      if(result.status == 'failed'){
        Swal.fire( 'cancelled', 'Email does not exist', 'error')     

       } else{
        Swal.fire( 'Link sended successfully!', '', 'success').then(() =>{   
          window .location.reload()      
        })        
       }         
    console.log(this.Form) 
    //  localStorage.setItem('Email',JSON.stringify(this.Form));
    //  console.log(this.Form)   
        
    })  
  }
  }
}
