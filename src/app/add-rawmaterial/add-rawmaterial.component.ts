import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-rawmaterial',
  templateUrl: './add-rawmaterial.component.html',
  styleUrls: ['./add-rawmaterial.component.css']
})
export class AddRawmaterialComponent implements OnInit {
   
  productForm: any;
  addProduct=true
  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup ({
      image :new FormControl(""),
      Colour: new FormControl(""),
      Number: new FormControl(""),
      Name: new FormControl(""),
      Description: new FormControl(""),
      Quantity: new FormControl(this.quantity),
      Price: new FormControl(""),
    })    
  }

  cancel(){
    this.addProduct=false
  }

  submitForm(){
    if(this.productForm.value.image ==''||
    this.productForm.value.Colour ==''||
    this.productForm.value.Number ==''||
    this.productForm.value.Name ==''||
    this.productForm.value.Price ==''||
    this.productForm.value.Quantity ==''||
    this.productForm.value.Description =='')
    { 
      Swal.fire(  
         'Cancelled',  
         'You Must  Enter All fields !',           //give for condition to take all properties take empty values
         'error'                                  //then take one alert message like not save all data
       ) 
    }else{  
       fetch("https://powerful-erin-gopher.cyclic.app/products/addproduct", {
       method:'post',
       headers:{
         "Access-Control-Allow-Origin": "*",
         "Content-Type":'application/json'
       },
       body:JSON.stringify(this.productForm.value)
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
       this.productForm.reset()
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your product has been saved',
        showConfirmButton: false,
        timer: 1500        
      })
   }
  )      
       .catch(error => console.log('error',error)) 
  }  
}

   //this is for  quantity
   quantity:number=1;
   i=1
   plus(){
     if(this.i !=0){
       this.i++;
       this.quantity=this.i;
     }
   }
   minus(){
     if(this.i !=1){
       this.i--;
       this.quantity=this.i;
     }
   } 

}
