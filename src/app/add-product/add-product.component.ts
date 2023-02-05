import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
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
    console.log(this.productForm) 
    if(this.productForm.invalid){         //this if condition is used to return the page if any one field is not filled
      return
    }
       fetch("http://localhost:2000/products/addproduct", {
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
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500        
      })
   }
  )      
       .catch(error => console.log('error',error)) 
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


  // url=""
  // onSelectFile(e:any){
  //   if(e.target.files){       //files is used to get the input files DOM property
  //    var reader = new FileReader();  //tjis object is used to read the file
  //    reader.readAsDataURL(e.target.files[0]);           //DataURL to read the data  
  //   reader.onload=(event:any)=>{                        //event parameter is used upload any type files  like xml files ,text files
  //   this.url=event.target.result;
  //   }
  //   }
  // }

 


