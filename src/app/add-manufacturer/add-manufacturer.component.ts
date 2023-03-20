import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {

  Signup!: FormGroup;
  sign: any=[]

  constructor() { }

  ngOnInit(): void {
    this.Signup= new FormGroup({
      Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      Email : new FormControl('',[Validators.required,Validators.email]),
      UserType:new FormControl(),
      Company:new FormControl('',[Validators.required]),
      Location:new FormControl('',[Validators.required]),
      Address:new FormControl(),
    });
  }
  submitForm(){
  
      if(this.Signup.value.Firstname ==""||this.Signup.value.Lastname ==""||this.Signup.value.Email ==""||this.Signup.value.mobile ==""||this.Signup.value.Company ==""||this.Signup.value.Address ==""||this.Signup.value.Location ==''||this.Signup.value.UserType ==''){
        Swal.fire(  
          'Cancelled',  
          'You Must  Enter All fields !',           //give for condition to take all properties take empty values
          'error'                                  //then take one alert message like not save all data
        )  
        }else{
    
      var requestOptions = {
        method: 'POST',
        body:JSON.stringify(this.Signup.value)
      };
      console.log(requestOptions);  
      fetch("http://localhost:2000/manufacturer/adddata",{
        method:'POST',
        headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":'application/json'
        },
      body:JSON.stringify(this.Signup.value)
       
      })  .then(response => response.json())
      
      .then(result =>
        console.log(result))
     
      .catch(error => console.log('error',error)); 
    
        }  
        
      if (this.Signup.invalid) {
        return;
      }   
      console.log(JSON.stringify(this.Signup.value, null, 2)); 

}
}