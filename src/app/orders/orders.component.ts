import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5,6];
  selectedValue: any;
  count = 6;
  @ViewChild('namebutton')
  namebutton!: ElementRef;
  order:any
  popup=false;
  data1: any=[];
  product=false;
  products=true;

  constructor() { }

  ngOnInit(): void {

    // fetch("http://localhost:7500/order/orders",{
    //   method:"GET",
    //   headers:{
    //     "access-Control-Allow-Origin":"*",
    //   },
    //   body:JSON.stringify(this.order)
    // })
    // .then(response => response.json())
    // .then(result =>{
    //   console.log(result),
    //   this.order = result.order
    // console.log(this.order)
    // }
    // ).catch(err =>
    //   console.log('error',err))
  }
    view(id:any){
      this.product=true;
      this.products=false;
      const orders = this.order.find((m: { OrderId: any; }) => m.OrderId ==id)
      this.data1.push(orders)

  }
  can(){
    this.popup=false;
  }
  countStar(star: any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  clearStar(){
    alert('select');
   this.namebutton.nativeElement.classList.remove('selected');
  }
  remove(){
    this.product=false;
  }

}
