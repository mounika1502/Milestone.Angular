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
  details: any=[]

  constructor(private router:Router, private fb:FormBuilder) {
  }
 

  ngOnInit(): void {

    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)

    this.productForm = new FormGroup ({
      Image :new FormControl('',[Validators.required]),
      Number: new FormControl('',[Validators.required]),
      Name: new FormControl('',[Validators.required]),
      color: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      size: new FormControl('',[Validators.required]),
      stone:new FormControl('',[Validators.required]),
      region: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      date: new FormControl('',[Validators.required]),
      mobile:new FormControl(""),
      Firstname: new FormControl(""),
      Lastname : new FormControl("")
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
    this.productForm.value.Firstname ==''||
    this.productForm.value.Lastname ==''||
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

       if(result.status == 'error'){
        alert('Product Id already exist')     

       } else{
        Swal.fire( 'Submitted successfully!', '', 'success').then(() =>{         
          this.router.navigate(["raw"])
        }) 
       
       }
       
   
       
            
   }
   
  )      
       .catch(error =>{
        console.error(error)
        console.log('error',error)
       } ) 
       
  }  
}

get Image()
{
 return this.productForm.get('Image');
} get Number()
{
 return this.productForm.get('Number');
} get Name()
{
 return this.productForm.get('Name');
} get color()
{
 return this.productForm.get('color');
} get region()
{
 return this.productForm.get('region');
} get size()
{
 return this.productForm.get('size');
} get stone()
{
 return this.productForm.get('stone');
} get date()
{
 return this.productForm.get('date');
}

}
