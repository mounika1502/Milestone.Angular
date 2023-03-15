import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dropdown: any;
  products:any=[]
  searchtext:any

  toggle(){
    this.dropdown = !this.dropdown
  }

  constructor() { 
    this.getProduct()
  }

  ngOnInit(): void {
  }
  getProduct(){    
    fetch("http://localhost:2000/raw/getraw", {
   method:'get',
   headers:{
     "Access-Control-Allow-Origin": "*",
     "Content-Type":'application/json'
   },
  
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result),
   this.products = result.RawInfo
   }
   )     
   .catch(error => console.log('error',error))
}

delete(Number:any){    

  console.log(Number)
    fetch("http://localhost:2000/raw/delete/" + Number,{
     method:'DELETE',
     headers:{
       "access-Control-Allow-Origin":"*"
     },
    })
    .then(response => response.json())
    .then(result=>{
     console.log(result)
     this.getProduct()
     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      icon: 'warning',
   
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
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
