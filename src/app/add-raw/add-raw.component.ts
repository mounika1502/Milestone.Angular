import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-raw',
  templateUrl: './add-raw.component.html',
  styleUrls: ['./add-raw.component.css']
})
export class AddRawComponent implements OnInit {
  productForm: any;
  text: any;

  constructor(private router:Router, private fb:FormBuilder) {
    this.myForm()
  }
  myForm(){
    //  this.productForm = this.fb.group({
    //   Number:['',Validators.required]
    //  });
  }

  ngOnInit(): void {

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)

    this.productForm = new FormGroup ({
      Image :new FormControl(""),
      Number: new FormControl(""),
      Name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      stone:new FormControl(""),
      region: new FormControl(""),
      date: new FormControl(""),
      mobile:new FormControl(""),
    }) 

  }
  submitForm(){
    if(this.productForm.value.Image ==''||
    this.productForm.value.Number ==''||
    this.productForm.value.Name ==''||
    this.productForm.value.color ==''||
    this.productForm.value.region ==''||
    this.productForm.value.size ==''||
    this.productForm.value.stone ==''||
    this.productForm.value.mobile ==''||
    this.productForm.value.date =='')
    { 
      Swal.fire(  
         'Cancelled',  
         'You Must  Enter All fields !',           //give for condition to take all properties take empty values
         'error'                                  //then take one alert message like not save all data
       ) 
    }else{  
       fetch("http://localhost:2000/raw/addraw", {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.productForm.value)
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
       
       Swal.fire( 'Submitted successfully!', '', 'success').then(() =>{         
        this.router.navigate(["raw"])
      }) 
      
   }
  )      
       .catch(error => console.log('error',error)) 
  }  
}
}
