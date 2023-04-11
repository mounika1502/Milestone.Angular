import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-dealer',
  templateUrl: './add-dealer.component.html',
  styleUrls: ['./add-dealer.component.css']
})
export class AddDealerComponent implements OnInit {  
 
  registerForm: any;
  dealer: any=[];
  sign: any=[]
  Signupform:any;

  constructor() { }

  ngOnInit(): void {
    this.Signupform = new FormGroup(
      {
        Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        mobile : new FormControl('',[Validators.required]),
        Email : new FormControl('',[Validators.required,Validators.email]),
        // Image:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        // BusinessNumber : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        Company: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        Address: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        Location:new FormControl(),
        sid:new FormControl(0),
        UserType:new FormControl('',Validators.required)        
      });
  }

  Adddata(){
    if(this.Signupform.value.Firstname ==""||this.Signupform.value.UserType ==""||this.Signupform.value.Lastname ==""||this.Signupform.value.Email ==""||this.Signupform.value.mobile ==""||this.Signupform.value.Company ==""||this.Signupform.value.Address ==""){
      Swal.fire(  
        'Cancelled',  
        'You Must  Enter All fields !',           //give for condition to take all properties take empty values
        'error'                                  //then take one alert message like not save all data
      )  
      }else{
    this.Signupform.value.sid = this.sign.length+1;   
    Swal.fire('Added!', '', 'success').then(() => {
      window.location.href=('/dealer');
    }); 
    var requestOptions = {
      method: 'POST',
      body:JSON.stringify(this.Signupform.value)
    };
    console.log(requestOptions);  
      fetch("http://localhost:2000/dealer/adddealer",{
        method:'POST',
        headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":'application/json'
        },
      body:JSON.stringify(this.Signupform.value)
      
      })  .then(response => response.json())
      
      .then(result =>
        console.log(result))
      
      .catch(error => console.log('error',error)); 
        }         
    console.log(JSON.stringify(this.Signupform.value, null, 2));  
  }

 
  get Firstname()
  {
   return this.Signupform.get('Firstname') as FormControl;
  }
  get Lastname()
  {
   return this.Signupform.get('Lastname') as FormControl;
  }
  get mobile()
  {
   return this.Signupform.get('mobile') as FormControl;
  }
  get Company()
  {
   return this.Signupform.get('Company') as FormControl;
  }
  get Email()
  {
   return this.Signupform.get('Email') as FormControl;
  }
  get Location()
  {
   return this.Signupform.get('Location') as FormControl;
  }
  get Address()
  {
   return this.Signupform.get('Address') as FormControl;
  }
  get UserType()
  {
   return this.Signupform.get('UserType') as FormControl;
  }
}
