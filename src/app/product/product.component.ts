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

  productsStore: any=[]
  cartItemList: any;
  test:any;
 
  constructor() {
     this.getStoreProducts();
   }

  ngOnInit(): void {  
  }

  getStoreProducts() {
    fetch("https://powerful-erin-gopher.cyclic.app/dealerproducts/getproduct",{
  method:"GET",
  headers:{
    "access-Control-Allow-Origin":"*",
  },
 
 })
 .then(response => response.json())
 .then(result =>{
  console.log(result),
  this.productsStore = result.DealerproductInfo
 }
 ).catch(err =>
  console.log('error',err))
  }



// export class ProductsComponent {


  
  // cartpage() {
  //   this.router.navigate(['/cart']);
  //  }
  
  
  products:any=[];
  cartItem:number = 0;
  router:any=[];
item:any=[];
name:any;
imgurl:any;
prodId:any;
price:any;
qnt:any;
Totalprice:any;
// constructor() {}


//   ngOnInit(): void {
//     this.get();
//     this.cartItemFunc();
//   }
 cartpage() {
    this.router.navigate(['/cart']);
   }
  
//increase the cartItem product
cartItemFunc(){
  if(localStorage.getItem('anunya') != null){
  var cartCount = JSON.parse(localStorage.getItem('anunya') || '{}');
  this.cartItem = cartCount.length;
  console.log(this.cartItem)
}
}

  

//   get() {
//     console.log('getStoreProducts')
//     fetch("http://localhost:1000/productRouter/products", {
//       method: 'GET',
//       headers: {
//         "access-Control-Allow-Origin": "*",

//       },


//     })
//        .then(response => response.json())
//       .then((result) => {
//         console.log(result.products)
//           this.products = result.products
//         console.log(this.products)
//       }

//       ).catch(err =>
//         console.log(err))
//   }





  itemsCart: any = [];  // itemsCart is a global array
  addCart(category: any) {
    let cartDataNull = localStorage.getItem('anunya'); // cartDataNull is a variable , localCart is a key,
    if (cartDataNull == null) {
      let storeDataGet: any = []; // storeDataGet is a array
      storeDataGet.push(category); // push the category into localstorage
      localStorage.setItem('anunya',JSON.stringify(storeDataGet));  //localCart is key ,storeDataGet is To convert the stringify
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
      this.cartItemFunc();

}
}




// }
  
  




