import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-dealer-product',
  templateUrl: './dealer-product.component.html',
  styleUrls: ['./dealer-product.component.css']
})
export class DealerProductComponent implements OnInit {
  products: any;
  data: any;


  constructor(private service:UpdateService,private router:Router) { }

  ngOnInit(): void {
    const localdata=localStorage.getItem('product')
    if(localdata!=null){
      this.data=JSON.parse(localdata)
    }   
  }
  updateProduct(id:any){
    localStorage.setItem('product',JSON.stringify(this.data))
    const data = {
      imgurl: this.data.imgurl,
      prodId: this.data.prodId,
      name:this.data.name,
      qnt:this.data.qnt,
      price:this.data.price,
      color:this.data.color,
      size:this.data.size,
      thick:this.data.thick,
      quality:this.data.quality,
      region:this.data.region,
      date:this.data.date,
      description:this.data.Description
    }
    console.log(data)
    this.service.update(data,id).subscribe((datas)=>{
      console.log(datas)
      if(datas){
          Swal.fire( 'Updated successfully!', '', 'success').then(() =>{ 
            this.router.navigate(['/inventory'])     
          }) 
          
      }
    })  
  }

  closeForm(){
    this.router.navigate(["inventory"])
  } 

}
