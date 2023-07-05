import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    products:any=[];
    name: any;
    searchtext:any;
    getbyName:any;    
    type:any;    
    
  constructor(){
    this.get();
  }   
    
  ngOnInit(): void {       
    this.type=JSON.parse(localStorage.getItem('rahul')||'{}');        
    this.name=this.type.name
    console.log(this.name) 
    this.get();
  }         
    
    anu(cart:any){
      window.location.href=("/card-description")
      localStorage.setItem('anu',JSON.stringify(cart));
      console.log(cart)     
    }
    
     
    get() {
      console.log(this.name)
      fetch("https://milestone-096608973980.herokuapp.com/products/getbyName/" + this.name, {
        method: 'GET',
      headers: {
        "access-Control-Allow-Origin": "*",    
      },    
    })
      .then(response => response.json())
      .then(result => {
        console.log(result),
          this.products = result.product    
        console.log(this.products)    
      }    
      ).catch(err =>
        console.log(err))
    }   
    
    
}


