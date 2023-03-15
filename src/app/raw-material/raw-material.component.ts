import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent implements OnInit {

  searchtext:any;
  products: any=[];
  constructor() {
    this.getProduct()
   }

  ngOnInit(): void {
  }
   //This is for product getting (gett) call 
   getProduct(){    
    fetch("http://localhost:2000/raw/getraw", {
   method:'get',
   headers:{
     "Access-Control-Allow-Origin": "*",
     "Content-Type":'application/json'
   },
  
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result),
   this.products = result.RawInfo
   }
   )     
   .catch(error => console.log('error',error))
}

delete(Number:any){    
  fetch("http://localhost:2000/raw/delete/" + Number,{
   method:'DELETE',
   headers:{
      "access-Control-Allow-Origin":"*"
    },
  })
  .then(response => response.json())
  .then(result=>{
    console.log(result)
    this.getProduct()
    alert('ok')
  }
  ).catch(err =>
     console.log(err))    
} 
//this is for edit the product
edit(rawProduct:any){ 
  this.products = rawProduct
  localStorage.setItem('rawproduct',JSON.stringify(rawProduct))   
}


}
