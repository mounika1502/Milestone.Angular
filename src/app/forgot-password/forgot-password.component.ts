import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  Form: any;
  products: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.Form = new FormGroup({
      Email:new FormControl(""),
      Password: new FormControl("")     
    })
  }

  login(){
    this.router.navigate(["/login"])
  }
  submitForm(id:any){
    
    console.log(this.Form)
    fetch("http://localhost:2000/signupform/updatePassword/" + id, {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.Form.value),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),


          this.products = result  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
        console.log(this.products)
              
      }
      ).catch(err =>
        console.log(err))
   

  }

}
