import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  Form: any;
  products: any;
  details: any=[];
  text: any;
  sign: any;
  Email:any;
  confirmPassword: any;
 
  constructor(private router:Router) {
   }

  ngOnInit(): void {
    this.Form = new FormGroup({
      Email:new FormControl(""),
      Password: new FormControl("") ,
        
    })

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
  }

  login(){
    this.router.navigate(["/login"])
  }

  submitForm(){  
    var Obj={
      "confirmPassword":this.confirmPassword
    }

    console.log(Obj.confirmPassword) 
    if(this.Form.value.Password == Obj.confirmPassword) {
    
    fetch("https://milestone-096608973980.herokuapp.com/signupform/updatePassword/" + this.Form.value.Email, {
      method: 'PUT',
      headers: {
        "Access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.Form.value),       // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
        console.log(this.Form.value.Email)

          this.products = result  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
        console.log(this.products)

         Swal.fire( 'Updated successfully!', '', 'success').then(() =>{         
       this.router.navigate(["/login"])
      //  window.location.reload()
    })          
         
      }
      ).catch(err =>
        console.log(err))
  }else{
    alert('password not match')
  }
}
}
