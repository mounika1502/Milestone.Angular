import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: any;
  addProduct=true
  text: any;
  prodSize: any;

  constructor( private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {

    
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)

    this.productForm = new FormGroup ({
      imgurl :new FormControl('',[Validators.required]),
      prodId: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      color: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      size: new FormControl('',[Validators.required]),
      thick: new FormControl('',[Validators.required]),
      qnt: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      region: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      quality: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      mobile:new FormControl(""),
      description: new FormControl('',[Validators.required])
    })   

  }
  cancel(){
    this.addProduct=false
  }
  toggle(){
    this.prodSize = !this.prodSize
  }

  submitForm(){
    console.log(this.productForm.value)
    if(this.productForm.value.imgurl ==''||
    this.productForm.value.prodId ==''||
    this.productForm.value.name ==''||
    this.productForm.value.color ==''||
    this.productForm.value.size ==''||
    this.productForm.value.thick ==''||
    this.productForm.value.qnt ==''||
    this.productForm.value.region ==''||
    this.productForm.value.quality ==''||
    this.productForm.value.date ==''||
    
    this.productForm.value.description ==''||
    this.productForm.value.price =='')
    { 
      Swal.fire(  
         'Cancelled',  
         'You Must  Enter All fields !',           //give for condition to take all properties take empty values
         'error'                                  //then take one alert message like not save all data
       ) 
    }else{  
       fetch("http://localhost:2000/products/addproduct", {
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
        this.router.navigate(["inventory"])
      }) 
    }
  )      
       .catch(error => console.log('error',error)) 
  }  
}

  get imgurl()
  {
   return this.productForm.get('imgurl');
  }
  get name()
  {
    return this.productForm.get('name');
  }
  get color()
  {
    return this.productForm.get('color');
   }
   get prodId()
  {
    return this.productForm.get('prodId');
   }
    get size()
    {
     return this.productForm.get('size');
    }
   get thick()
   {
    return this.productForm.get('thick');
   }
   get qnt()
   {
    return this.productForm.get('qnt');
   }
   get region()
   {
    return this.productForm.get('region');
   }
   get quality()
   {
    return this.productForm.get('quality');
   }
   get date()
   {
    return this.productForm.get('date');
   }
   get price()
   {
    return this.productForm.get('price');
   }
   get description()
   {
    return this.productForm.get('description');
   }

}

   //this is for  quantity
  //  quantity:number=1;
  //  i=1
  //  plus(){
  //    if(this.i !=0){
  //      this.i++;
  //      this.quantity=this.i;
  //    }
  //  }
  //  minus(){
  //    if(this.i !=1){
  //      this.i--;
  //      this.quantity=this.i;
  //    }
  //  } 
   




 


