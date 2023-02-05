import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: any;
  products:any=[]
  addProduct= false;
  editForm=false;
  data: any;
  datas:any=[];
  productform:any={
    image: '',
    Number:'',
    Name:'',
    Quantity:'',
    Price:'',
    Description:''
  }
  constructor( private router:Router,private service:UpdateService) {
    this.getProduct();  
   }

  ngOnInit(): void {

    this.productForm = new FormGroup ({
      image :new FormArray([]),      
      Name: new FormControl(""),
      Quantity: new FormControl(this.quantity),
      Price: new FormControl(""),
      Number:new FormControl(""),
      Description: new FormControl("")
    })
  }

  //this is for quantity function
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

  closeForm(){
    this.editForm=false
  }


//This is for product adding (post) call
  submitForm(){
    console.log(this.productForm) 
    if(this.productForm.invalid){
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
       alert('Successfully Submited')
     }
       )     
       .catch(error => console.log('error',error)) 
  }

  //This is for product getting (gett) call 
  getProduct(){    
    fetch("http://localhost:2000/products/getproduct", {
   method:'get',
   headers:{
     "Access-Control-Allow-Origin": "*",
     "Content-Type":'application/json'
   },
   body:JSON.stringify(this.getProduct)
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result),
   this.products = result.ProductInfo
   }
   )     
   .catch(error => console.log('error',error))
}

//This is for product delete
delete(Number:any){

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
   
  })

  console.log(Number)
    fetch("http://localhost:2000/products/deleteproduct/" + Number,{
     method:'DELETE',
     headers:{
       "access-Control-Allow-Origin":"*"
     },
    })
    .then(response => response.json())
    .then(result=>{
     console.log(result)
     this.getProduct()
     if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
    }
    ).catch(err =>
     console.log(err))    
 }

 //this is for edit the product
 edit(products:any){ 
  this.productform = products
  this.editForm = true;
}
 //this is for product update function
updateProduct(id:any){
  const data = {
    image: this.productform.image,
    Number:this.productform.Number,
    Name:this.productform.Name,
    Quantity:this.productform.Quantity,
    Price:this.productform.Price,
    Description:this.productform.Description
  }
  console.log(data)
  this.service.update(data,id).subscribe((datas)=>{
    console.log(datas)
    if(datas){
      alert('updated successfully')
    }
  })  
}
}
  
  




