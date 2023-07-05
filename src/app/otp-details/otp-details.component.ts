import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-details',
  templateUrl: './otp-details.component.html',
  styleUrls: ['./otp-details.component.css']
})
export class OtpDetailsComponent implements OnInit {
  searchtext:any;
  details:any=[]

  constructor() { 
    this.getProduct()
  }

  ngOnInit(): void {

  }

    //This is for product getting (gett) call 
    getProduct(){    
      fetch("https://milestone-096608973980.herokuapp.com/signupform/getsignupdetails", {
     method:'get',
     headers:{
       "Access-Control-Allow-Origin": "*",
       "Content-Type":'application/json'
     },
     body:JSON.stringify(this.getProduct)
   }).then(res=> res.json())
   .then(result=>{ 
     console.log(result),
     this.details = result.SignupInfo
     }
     )     
     .catch(error => console.log('error',error))
  }

}
