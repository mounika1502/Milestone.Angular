import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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

  constructor( private router:Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup ({
      imgurl :new FormControl(""),
      prodId: new FormControl(""),
      name: new FormControl(""),
      qnt: new FormControl(""),
      price: new FormControl(""),
    })    
  }
  cancel(){
    this.addProduct=false
  }

  submitForm(){
    if(this.productForm.value.imgurl ==''||
    this.productForm.value.prodId ==''||
    this.productForm.value.name ==''||
    this.productForm.value.qnt ==''||
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
        window.location.reload()
      }) 
   }
  )      
       .catch(error => console.log('error',error)) 
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
   } 




 


