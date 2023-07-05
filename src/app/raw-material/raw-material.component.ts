import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent implements OnInit {
  text:any
  searchtext:any;
  products: any=[];
  details: any=[]
  manufacturer: any;
 

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)

    var data ={
      mobile:this.text.mobile
    }    
    fetch("https://milestone-096608973980.herokuapp.com/raw/getraw", {
   method:'post',
   headers:{
     "Access-Control-Allow-Origin": "*",
     "Content-Type":'application/json'
   },
     body:JSON.stringify(data)
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result),
   this.products = result.RawInfo
   console.log(this.products)
   }
   )     
   .catch(error => console.log('error',error))
  }
  
  getProduct(){    
    fetch("https://milestone-096608973980.herokuapp.com/signupform/getsignupdetails", {
   method:'get',
   headers:{
     "Access-Control-Allow-Origin": "*",
     "Content-Type":'application/json'
   },
   body:JSON.stringify(this.getProduct)
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result)
    this.details = result.SignupInfo
    console.log(this.details)
 }
   )     
   .catch(error => console.log('error',error))
}
  

delete(Number:any){ 
   Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => { 
      if (result.isConfirmed == true) {
  fetch("https://milestone-096608973980.herokuapp.com/raw/delete/" + Number,{
   method:'DELETE',
   headers:{
      "access-Control-Allow-Origin":"*"
    },
  })
  .then(response => response.json())
       .then(result=>{
        console.log(result)
      })     
       .catch(err =>
        console.log(err))    
    } 
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
  })
}


//this is for edit the product
edit(rawProduct:any){ 
  this.products = rawProduct
  localStorage.setItem('rawproduct',JSON.stringify(rawProduct))   
}


}
