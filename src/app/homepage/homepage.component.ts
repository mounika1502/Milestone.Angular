import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  
  signupForm=false;
  data: any=[]
  aa: any={}
  text: any;

  constructor(private router: Router) {
   //this.get()
   }

  ngOnInit(): void {
     this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
     this.aa=this.text.UserType
     console.log(this.aa)
    // console.log(this.text.UserType)
  }  

  logout(){
      localStorage.clear();
      window.location.href=("/login")
  }
  

 
 
  
}
