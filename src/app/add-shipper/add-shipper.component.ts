import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.css']
})
export class AddShipperComponent implements OnInit {
  ShipperForm:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.ShipperForm = new FormGroup({
      Name:new FormControl(""),
      Mobile:new FormControl(""),
      Address:new FormControl(""),
      Truck:new FormControl(""),
      Trucknumber:new FormControl(""),
      Truckimage:new FormControl(""),
      Licence:new FormControl(""),
      Aadhar:new FormControl(""),
      Pan:new FormControl(""),
    })
  }

  submit(){
      if(this.ShipperForm.value.Image ==''||
      this.ShipperForm.value.Number ==''||
      this.ShipperForm.value.Name ==''||
      this.ShipperForm.value.color ==''||
      this.ShipperForm.value.region ==''||
      this.ShipperForm.value.color ==''||
      this.ShipperForm.value.date =='')
      { 
        Swal.fire(  
           'Cancelled',  
           'You Must  Enter All fields !',           //give for condition to take all properties take empty values
           'error'                                  //then take one alert message like not save all data
         ) 
      }else{  
         fetch("http://localhost:2000/shippers/addshipper", {
         method:'post',
         headers:{
           "Access-Control-Allow-Origin": "*",
           "Content-Type":'application/json'
         },
         body:JSON.stringify(this.ShipperForm.value)
       }).then(res=> res.json())
       .then(result=>{ 
         console.log(result)
         
         Swal.fire( 'Submitted successfully!', '', 'success').then(() =>{         
           this.router.navigate(["shippers"])
        }) 
        
     }
    )      
         .catch(error => console.log('error',error)) 
    }  
  }

  }


