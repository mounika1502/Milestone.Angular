import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  data: any;

  constructor( private router:Router,private service:UpdateService) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('Description') || '{}') 
    console.log(this.data)    
  }
 
  updateProduct(id:any){
    localStorage.setItem('product',JSON.stringify(this.data))
    const data = {
      imgurl: this.data.imgurl,
      prodId: this.data.prodId,
      name:this.data.name,
      qnt:this.data.qnt,
      price:this.data.price,
      description:this.data.description,
      date:this.data.date,
      region:this.data.region,
      quality:this.data.quality,
      thick:this.data.thick,
      color:this.data.color
    }
    console.log(data)
    this.service.update(data,id).subscribe((datas)=>{
      console.log(datas)
      if(datas){
        Swal.fire( 'Updated successfully!', '', 'success').then(() =>{                  
        }) 
      }
    })  
  }

  closeForm(){
    this.router.navigate(["product"])
  } 
  //This is for product delete
 delete(prodId:any){ 
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {

  console.log(Number)
    fetch("https://milestone-096608973980.herokuapp.com/products/deleteproduct/" + prodId,{
     method:'DELETE',
     headers:{
       "access-Control-Allow-Origin":"*"
     },
    })
    .then(response => response.json())
    .then(result=>{
     console.log(result)
   })
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

}

