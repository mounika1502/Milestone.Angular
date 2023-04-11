import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  aa: any={}
  text: any;
  cartItem:number = 0;
  itemsCart: any = [];

  constructor(private router: Router) {
   //this.get()
   }

  ngOnInit(): void {
     this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
     this.aa=this.text.UserType
     console.log(this.aa)
     this.cartItemFunc();
  }  

  logout(){
      localStorage.clear();
      window.location.href=("/login")
  }
    addCart(category: any) {
      let cartDataNull = localStorage.getItem('anunya'); // cartDataNull is a variable , localCart is a key,
      if (cartDataNull == null) {
        let storeDataGet: any = []; // storeDataGet is a array
        storeDataGet.push(category); // push the category into localstorage
        localStorage.setItem('anunya',JSON.stringify(storeDataGet));
       
    //     Swal.fire('Added Successfully!', '', 'success').then(() => {
    //       window.location.reload()
    //    } );
       //localCart is key ,storeDataGet is To convert the stringify
      }
      
      else {
        var id = category.prodId;  // this is product id represented
        let index: number = -1;
        this.itemsCart = JSON.parse(localStorage.getItem('anunya') || '{}'); // 
        for (let i = 0; i < this.itemsCart.length; i++) {   // i is a loop vice (inc is the products)
          if (parseInt(id) === parseInt(this.itemsCart[i].prodId)) {    // In parseInt to store itemcart array in index
            this.itemsCart[i].qnt = category.qnt;  // this qnt is inc and dec the product
            index = i;
            break;  // to break the function (end)
          }
        }     
        if (index == -1) {
          this.itemsCart.push(category);  // this line product item to push itemcart array
          localStorage.setItem('anunya', JSON.stringify(this.itemsCart));  //
        }
        else {
          localStorage.setItem('anunya', JSON.stringify(this.itemsCart));
        }    
      }      
      window .location.reload()        
  }

  cartItemFunc(){
    if(localStorage.getItem('anunya') != null){
    var cartCount = JSON.parse(localStorage.getItem('anunya') || '{}');
    this.cartItem = cartCount.length;
    console.log(this.cartItem)   
  }
  }
    
  }

 
 
  

