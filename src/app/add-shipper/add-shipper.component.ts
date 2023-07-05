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
      if(this.ShipperForm.value.Name ==''||
      this.ShipperForm.value.Mobile ==''||
      this.ShipperForm.value.Address ==''||
      this.ShipperForm.value.Truck ==''||
      this.ShipperForm.value.Trucknumber ==''||
      this.ShipperForm.value.Truckimage ==''||
      this.ShipperForm.value.Aadhar ==''||
      this.ShipperForm.value.Pan ==''||
      this.ShipperForm.value.Licence =='')
      { 
        Swal.fire(  
           'Cancelled',  
           'You Must  Enter All fields !',           //give for condition to take all properties take empty values
           'error'                                  //then take one alert message like not save all data
         ) 
      }else{  
         fetch("https://milestone-096608973980.herokuapp.com/shippers/addshipper", {
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

  get Name()
{
 return this.ShipperForm.get('Name');
} get Mobile()
{
 return this.ShipperForm.get('Mobile');
} get Address()
{
 return this.ShipperForm.get('Address');
} get Truck()
{
 return this.ShipperForm.get('Truck');
} get Trucknumber()
{
 return this.ShipperForm.get('Trucknumber');
} get Truckimage()
{
 return this.ShipperForm.get('Truckimage');
} get Aadhar()
{
 return this.ShipperForm.get('Aadhar');
} get Pan()
{
 return this.ShipperForm.get('Pan');
}
get Licence()
{
 return this.ShipperForm.get('Licence');
}

  }


