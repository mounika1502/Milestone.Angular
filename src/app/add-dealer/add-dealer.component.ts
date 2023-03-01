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

  constructor() { }

  ngOnInit(): void {

    this.registerForm = new FormGroup(
      {
        FirstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        LastName : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        PrimaryPhoneNumber : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        Email : new FormControl('',[Validators.required,Validators.email]),
        Image:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        BusinessNumber : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        CompanyName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        Address: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        sid:new FormControl(0),
        StoreId:new FormControl('',Validators.required),
        
      });
  }

  Adddata(){
    if(this.registerForm.value.FirstName ==""||this.registerForm.value.LastName ==""||this.registerForm.value.Email ==""||this.registerForm.value.BusinessNumber ==""||this.registerForm.value.PrimaryPhoneNumber ==""||this.registerForm.value.Address ==""||this.registerForm.value.Image ==""||this.registerForm.value.CompanyName ==""||this.registerForm.value.Notification==""||this.registerForm.value.StoreId==""){
      Swal.fire(  
        'Cancelled',  
        'You Must  Enter All fields !',           //give for condition to take all properties take empty values
        'error'                                  //then take one alert message like not save all data
      )  
      }else{
    this.registerForm.value.sid = this.dealer.length+1;   
    Swal.fire('Added Successfully!', '', 'success').then(() => {
      window.location.href=('/dealer');
    }); 
    var requestOptions = {
      method: 'POST',
      body:JSON.stringify(this.registerForm.value)
    };
    console.log(requestOptions);  
    fetch("https://localhost:2000/dealer/adddealer",{
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type":'application/json'
      },
    body:JSON.stringify(this.registerForm.value)
     
    })  .then(response => response.json())
    
    .then(result =>
      console.log(result))
     
    .catch(error => console.log('error',error)); 
      }  
      
    if (this.registerForm.invalid) {
      return;
    }   
    console.log(JSON.stringify(this.registerForm.value, null, 2));  
  }
  onSubmit(){
 
  }
  get FirstName()
  {
   return this.registerForm.get('FirstName') as FormControl;
  }
  get LastName()
  {
   return this.registerForm.get('LastName') as FormControl;
  }
  get BusinessNumber()
  {
   return this.registerForm.get('BusinessNumber') as FormControl;
  }
  get PrimaryPhoneNumber()
  {
   return this.registerForm.get('PrimaryPhoneNumber') as FormControl;
  }
  get Email()
  {
   return this.registerForm.get('Email') as FormControl;
  }
  get CompanyName()
  {
   return this.registerForm.get('CompanyName') as FormControl;
  }
  get Address()
  {
   return this.registerForm.get('Address') as FormControl;
  }
  get Image()
  {
   return this.registerForm.get('Image') as FormControl;
  }
}
