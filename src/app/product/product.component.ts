import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: any;
  products:any=[]
  addProduct= false;

  constructor() { }

  ngOnInit(): void {

    this.productForm = new FormGroup ({
      image :new FormControl(""),      
      Description: new FormControl(""),
      Name: new FormControl(""),
      Quantity: new FormControl(this.quantity),
      Price: new FormControl(""),
    })
  }

  //this is for quantity function
  quantity:number=1;
  i=1
  plus(){
    if(this.i !=0){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  } 
  
//this is for produ adding form popup box

add(){
  this.addProduct=true
}
cancel(){
  this.addProduct=false
}
//This is for product adding (post) call
  submitForm(){
    console.log(this.productForm) 
    if(this.productForm.invalid){
      return
    }
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
       alert('Successfully Submited')
     }
       )     
       .catch(error => console.log('error',error)) 
  }

  //This is for product getting (gett) call 
  getProduct(){
    
    fetch("http://localhost:2000/products/getproduct", {
   method:'get',
   headers:{
     "Access-Control-Allow-Origin": "*",
     "Content-Type":'application/json'
   },
   body:JSON.stringify(this.getProduct)
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result),
   this.products = result.ProductInfo
   alert('Successfully getting')
 }
   )     
   .catch(error => console.log('error',error))
}

//This is for product delete
delete(Number:any){
    fetch("http://localhost:2000/products/deleteproduct" + Number,{
     method:'DELETE',
     headers:{
       "access-Control-Allow-Origin":"*"
     },
    })
    .then(response => response.json())
    .then(result=>{
     console.log(result)
     this.getProduct()
    }
    ).catch(err =>
     console.log(err))
    
 }

}
  
  


