import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

 homeSlider ={items:1, dots:true, nav:true}; 

 

  constructor() { }

  ngOnInit(): void {
  }

}
