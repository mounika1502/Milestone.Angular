import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  finalcartItem: any=[];

  constructor() { }
 

    grandtotal: number = 0;
    getCartDetails: any = [];
     Firstname:any;
     Lastname:any;
     PhoneNumber:any;
     Area:any;
     City:any;
     State:any;
     Pincode:any;
     Email:any; 
  
    
     name:any;
     price:number=0;
     qnt:number=0;
    prodId:any;
    Totalprice:number=0;    
    imgurl:any;
  
  
  
  
     
  
    pop=false;
   
    ngOnInit(): void {
   
  } 

  popup(){
    this.pop=true;
  }
  
cash1(){

  this.finalcartItem = localStorage.getItem('anunya')
  console.log(this.finalcartItem);

  this.getCartDetails = [];
  // this.grandtotal = 0;
  var Obj ={
    "Firstname":this.Firstname,
    "Lastname":this.Lastname,
    "Pincode":this.Pincode,
    "PhoneNumber":this.PhoneNumber,
    "Email":this.Email,
    "Area":this.Area,
   "City":this.City,
   "State":this.State,
   "OrderItems":JSON.parse(this.finalcartItem)  
  }

  var requestOptions = {
        method: 'POST',
        body:Obj
      };
      console.log(Obj);  
      console.log(JSON.stringify(Obj))   //product details with user details
      fetch("http://localhost:2000/placeorders/post",{
        method:'POST',
        headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":'application/json'
        },
      body:JSON.stringify(Obj)
       
      })  .then(response => response.json())
      
      .then(result =>{
        console.log(result)
        localStorage.removeItem('anunya');
      })
       
      .catch(error => console.log('error',error));      
      
  this.close( )
    
  Swal.fire('order  placed Successfully!', '', 'success').then(() => {
     window.location.href=('/products');
  } );
}

close(){
  this.pop=false;
}

}


 
  

  
    



 




  
  
   
    
  
    
      
  
  
  
   
  
  
  
  


