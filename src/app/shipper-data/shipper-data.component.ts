import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipper-data',
  templateUrl: './shipper-data.component.html',
  styleUrls: ['./shipper-data.component.css']
})
export class ShipperDataComponent implements OnInit {
  data:any

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('Shippers') || '{}') 
    console.log(this.data) 
  }

  //this is for edit the product
edit(shippers:any){ 
  window.location.href=("/shipper-update")
  localStorage.setItem('Shippers',JSON.stringify(shippers))   
}

delete(Mobile:any){    
  fetch("http://localhost:2000/shippers/delete/" + Mobile,{
   method:'DELETE',
   headers:{
      "access-Control-Allow-Origin":"*"
    },
  })
  .then(response => response.json())
  .then(result=>{
    console.log(result)
  
    alert('ok')
  }
  ).catch(err =>
     console.log(err))    
} 

}
