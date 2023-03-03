import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  searchtext:any
  order:any=[] 
  OrderData: any;
  data: any;  
  Address: any;

  orderDetails :any = []
 
  constructor() { }

  ngOnInit(): void {

    fetch("http://localhost:2000/placeorders/getAllOrders",{
      method:"GET",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.order = result.orders
    console.log(this.order.OrderData)
    console.log(this.order)
    for(let i = 0;i < this.order.length;i++){
       this.data = this.order[i]      
    }  
    }
    ).catch(err =>
      console.log('error',err))
  }

  getAddress(test:any){
    window.location.href=("/log")
    localStorage.setItem('Order',JSON.stringify(test));
    console.log(test)  
  }

}
