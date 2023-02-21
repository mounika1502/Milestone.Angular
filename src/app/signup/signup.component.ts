import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm: any;
  signupdata: any=[]
  signupData: any=[]
  router: any;
  List:any = []
  loginData: any=[]

  constructor() { }

  ngOnInit(): void {
      //signup form
      this.SignupForm = new FormGroup({
        Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        Email : new FormControl('',[Validators.required,Validators.email]),
        Password : new FormControl('',[Validators.required,Validators.minLength(5)]),
        City:new FormControl('',[Validators.required]),
        UserType:new FormControl('',[Validators.required]),
        Pincode:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(6),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        Street:new FormControl('',[Validators.required]),
        State:new FormControl('',Validators.required),
        ManufacturerID:new FormControl('',[Validators.required]),
        Company:new FormControl('',[Validators.required]),
      });
      console.log(this.SignupForm)
  }

   //signup submit function
    signupSubmit(){       
      if(this.SignupForm.value.Firstname ==''||
       this.SignupForm.value.Lastname ==''||
       this.SignupForm.value.mobile ==''||
       this.SignupForm.value.Email ==''||
       this.SignupForm.value.Password ==''||
       this.SignupForm.value.UserType ==''||
       this.SignupForm.value.City ==''||
       this.SignupForm.value.Pincode ==''||
       this.SignupForm.value.Street ==''||
       this.SignupForm.value.Company ==''||
       this.SignupForm.value.State ==''
       ){
       Swal.fire(  
         'Cancelled',  
         'You Must  Enter All fields !',           //give for condition to take all properties take empty values
         'error'                                  //then take one alert message like not save all data
       ) 
    }else{
        
      fetch("https://powerful-erin-gopher.cyclic.app/signupform/addsignupdetails", {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.SignupForm.value)

     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)

       if(result.status ==='failed'){
        Swal.fire( 
          'Cancelled',
          'User already registered!',
          'error'
        )
        window.location.reload()
       }else{
        Swal.fire( 'Submitted successfully!', '', 'success').then(() =>{         
          this.router.navigate(["login"])
          window.location.reload()
        })       
       }       
     })       
       .catch(error => console.log('error',error))             
    }
  }
 

  get Firstname()
  {
   return this.SignupForm.get('Firstname');
  }
  get Lastname()
  {
   return this.SignupForm.get('Lastname');
  }
  get mobile()
  {
   return this.SignupForm.get('mobile');
  }
  get email()
  {
   return this.SignupForm.get('email');
  }
  get password()
  {
   return this.SignupForm.get('password');
  }
  get Address()
  {
   return this.SignupForm.get('Address');
  }

}
