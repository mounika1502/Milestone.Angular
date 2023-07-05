import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    finalcartItem: any=[];  
     grandtotal: any;
      getCartDetails: any = [];
       Firstname:any;
       Lastname:any;
       PhoneNumber:any;
       Address:any;
       City:any;
       State:any;
       Pincode:any;
       Email:any; 
       removeall:any    
       pop=false;
      constructor() { }
     
      ngOnInit(): void {
     
    } 
  
    popup(){
      this.pop=true;
    }
    
    cash1(){  
    this.finalcartItem = localStorage.getItem('anunya')
    console.log(this.finalcartItem);
  
    var Obj ={
      "Firstname":this.Firstname,
      "Lastname":this.Lastname,
      "Pincode":this.Pincode,
      "PhoneNumber":this.PhoneNumber,
      "Email":this.Email,
      "Address":this.Address,
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
        fetch("https://milestone-096608973980.herokuapp.com/placeorders/post",{
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
      
    Swal.fire('order  placed Successfully!', '', 'success').then(() => {
       window.location.href=('/product');
       localStorage.removeItem('anunya');
    }
     );
  }
  
  
  close(){
    this.pop=false;
  }
  
  
  
  }


 
  

  
    



 




  
  
   
    
  
    
      
  
  
  
   
  
  
  
  


