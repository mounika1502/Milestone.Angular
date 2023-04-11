import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProfileService } from '../profile.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  text:any=[]  
  profile = true;
  companyForm= false;
  products: any
  
  profileForm:any={
  Firstname:'',
  Lastname:'',
  mobile:'',
  Email:'',
  Password:'',
  City:'',
  Pincode:'',
  Street:'',
  State:'',
  } 
  Form: any;
  texts: any=[];
  constructor(private service:UpdateService, private fb:FormBuilder,private router:Router) {}  

  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text.Firstname)

     this.Form = new FormGroup({
      Company:new FormControl(""),
      Location:new FormControl(""),
      bio:new FormControl("")

     })
     console.log(this.Form)
  }

  company(){
    this.companyForm = true
    this.profile = false
  }

  submit(){
    localStorage.setItem('Login',JSON.stringify(this.text))
    console.log(this.Form.value)
    
        fetch("http://localhost:2000/signupform/addCompany/" + this.text.Authentication, {
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
            Swal.fire( 'Added successfully!', '', 'success').then(() =>{    
              this.router.navigate(["login"])  
              window.location.reload()   
              // this.companyForm = false
              // this.profile = true
            })  
                  
          }
          ).catch(err =>
            console.log(err))
      }
 
  
  arrow(){
    this.companyForm = false
    this.profile = true
  }

  edit(loginData:any){
     this.profileForm = loginData
     localStorage.setItem('Login',JSON.stringify(loginData))
     console.log(loginData)  
  } 

}
