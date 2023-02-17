import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dealer-product',
  templateUrl: './dealer-product.component.html',
  styleUrls: ['./dealer-product.component.css']
})
export class DealerProductComponent implements OnInit {
  productForm: any;
  addProduct=true

  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup ({
      imgurl :new FormControl(""),
      prodId: new FormControl(""),
      name: new FormControl(""),
      qnt: new FormControl(this.quantity),
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
    this.productForm.value.price ==''
    )
    { 
      Swal.fire(  
         'Cancelled',  
         'You Must  Enter All fields !',           //give for condition to take all properties take empty values
         'error'                                  //then take one alert message like not save all data
       ) 
    }else{  
       fetch("http://localhost:2000/dealerproducts/addproduct", {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.productForm.value)
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
       this.productForm.reset()
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your product has been saved',
        showConfirmButton: false,
        timer: 1500        
      })
   }
  )      
       .catch(error => console.log('error',error)) 
  }  
}

   //this is for  quantity
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

}
