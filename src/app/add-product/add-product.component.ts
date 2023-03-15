import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  size: any;

  constructor( private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {

    
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)

    this.productForm = new FormGroup ({
      imgurl :new FormControl(""),
      prodId: new FormControl(""),
      name: new FormControl(""),
      color: new FormControl(""),
      size: new FormControl(""),
      thick: new FormControl(""),
      qnt: new FormControl(""),
      price: new FormControl(""),
      region: new FormControl(""),
      quality: new FormControl(""),
      date: new FormControl(""),
      mobile:new FormControl(""),
      description: new FormControl("")
    })   

  }
  cancel(){
    this.addProduct=false
  }
  toggle(){
    this.size = !this.size
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
    this.productForm.value.mobile ==''||
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
   




 


