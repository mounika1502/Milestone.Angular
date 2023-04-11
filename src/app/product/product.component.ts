import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dealer:any; 
  searchtext:any;
  product:any;

  constructor() {
     this.get();
   }

  ngOnInit(): void {
    this.get();  
  }    
     
    
  //increase the cartItem product
  
  anu(cart:any){
    window.location.href=("/galaxyroute")
    localStorage.setItem('anu',JSON.stringify(cart));
    // localStorage.setItem('local',JSON.stringify(this.cart1));
    console.log(cart)   
  }  
 
    get() {
      fetch("http://localhost:2000/card/getcard", {
        method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.dealer = result.dealer
          console.log(this.dealer) 
      }
      ).catch(err =>
        console.log(err))
  }
  
  getproducts(data:any){
    localStorage.setItem('rahul',JSON.stringify(data))
  }
}






  
  




