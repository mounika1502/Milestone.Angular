import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shippers',
  templateUrl: './shippers.component.html',
  styleUrls: ['./shippers.component.css']
})
export class ShippersComponent implements OnInit {
  searchtext:any
  shippers:any=[]
  constructor() {
    this.getProduct()
   }

  ngOnInit(): void {
  }

  getProduct(){    
    fetch("https://milestone-096608973980.herokuapp.com/shippers/getshipper", {
   method:'get',
   headers:{
     "Access-Control-Allow-Origin": "*",
     "Content-Type":'application/json'
   },
  
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result),
   this.shippers = result.ShipperInfo
   }
   )     
   .catch(error => console.log('error',error))
}

description(data:any){
  window.location.href=("/shipper-data")
  localStorage.setItem('Shippers',JSON.stringify(data));
  console.log(data)  
}

}
