import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
 

    grandtotal: number = 0;
    getCartDetails: any = [];
     Firstname:any;
     Lastname:any;
     PhoneNumber:any;
     Address:any;
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
     
  //  OrderItems={
  //   name: new FormControl(),
  //     price: new FormControl(),
  //     prodId: new FormControl(),
  //     imgurl:new FormControl(),
  
  // }  
  
   
  }
     
  
  //  Adddata(){
  //   var requestOptions = {
  //     method: 'POST',
  //     body:JSON.stringify(this.details.value)
  //   };
  //   console.log(requestOptions);  
  //   fetch("http://localhost:5900/detailsRouter/create",{
  //     method:'POST',
  //     headers:{
  //       "Access-Control-Allow-Origin":"*",
  //       "Content-Type":'application/json'
  //     },
  //   body:JSON.stringify(this.details.value)
     
  //   })  .then(response => response.json())
    
  //   .then(result =>
  //     console.log(result))
     
  //   .catch(error => console.log('error',error));
    
  //   }
  popup(){
    this.pop=true;
  }
  close(){
    this.pop=false;
  }
  cash(){
    var subObj={
      name:this.name,
      price:this.price,
     grandtotal:this.grandtotal,
      prodId:this.prodId,
      Totalprice:this.Totalprice,
     imgurl:this.imgurl,
     qnt:this.qnt,
  
  
    
    }
  
    localStorage.removeItem('anunya');
    this.getCartDetails = [];
    this.grandtotal = 0;
    const Obj ={
      Firstname:this.Firstname,
      Lastname:this.Lastname,
      Pincode:this.Pincode,
      PhoneNumber:this.PhoneNumber,
      Email:this.Email,
      Address:this.Address,
     City:this.City,
     State:this.State,
     OrderItems:[
  
      {subObj}
      
  
  
  
  
     ]
    
    }
  
    var requestOptions = {
          method: 'POST',
          body:JSON.stringify(Obj)
        };
        console.log(requestOptions);  
        fetch("https://powerful-erin-gopher.cyclic.app/orderRoute/post",{
          method:'POST',
          headers:{
            "Access-Control-Allow-Origin":"*",
            "Content-Type":'application/json'
          },
        body:JSON.stringify(Obj)
         
        })  .then(response => response.json())
        
        .then(result =>
          console.log(result))
         
        .catch(error => console.log('error',error));
        
        
    this.close( )
    
  
      
    Swal.fire('order  placed Successfully!', '', 'success').then(() => {
      window.location.href=('/products');
  });
  
  
   
    
  
    
      
  
  
  
   
  
  
  
  }

}
