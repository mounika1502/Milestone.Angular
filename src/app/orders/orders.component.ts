import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  //   fetch("http://localhost:2000/placeorders/getAllOrders",{
  //     method:"GET",
  //     headers:{
  //       "access-Control-Allow-Origin":"*",
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(result =>{
  //     console.log(result),
  //     this.order = result.orders
  //   console.log(this.order.OrderData)
  //   console.log(this.order)
  //   for(let i = 0;i < this.order.length;i++){
  //      this.data = this.order[i]      
  //   }  
  //   }
  //   ).catch(err =>
  //     console.log('error',err))
  // }

  // getAddress(test:any){
  //   window.location.href=("/log")
  //   localStorage.setItem('Order',JSON.stringify(test));
  //   console.log(test)  
  // }
  searchtext:any
  order:any=[] 
  OrderData: any;
  data: any 
  Address: any;

  orderDetails :any = []
  test: any;
  pop=false;
  count= Number
  
  List: any=[]
  order1: any=[];
  data1: any;
  constructor() { }

  ngOnInit(): void {

    fetch("https://milestone-096608973980.herokuapp.com/orderRoute/getOrders",{
      method:"GET",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.order = result.orders
    
    console.log(this.order)


    this.count=this.order.length;
    console.log(this.count)
    
    for(let i = 0;i < this.order.length;i++){
       this.data = this.order[i]      
    }  
    }
    ).catch(err =>
      console.log('error',err))

      
  }
  getAddress(test:any){
    window.location.href=("/address")
    localStorage.setItem('Order',JSON.stringify(test));
    console.log(test)  
  }
  orders(test:any){
    this.data = test
    localStorage.setItem('orderitems',JSON.stringify(test))
  }
 placed(){
  debugger
  this.order1 = this.order.filter((item: any ) => item.OrderData.OrderItems.OrderStatus ==='Shipped'); 
  console.log(this.order1)  
  for(let i = 0;i < this.order1.length;i++){
    this.data1 = this.order1[i]  
    console.log(this.data1)    
 } 
    
  
 }   

 Shipped(){
  
 }
 delivered(){
  
 }

  

}
