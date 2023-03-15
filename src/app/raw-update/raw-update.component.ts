import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-raw-update',
  templateUrl: './raw-update.component.html',
  styleUrls: ['./raw-update.component.css']
})
export class RawUpdateComponent implements OnInit {
  data: any;

  constructor(private service:UpdateService,private router:Router) { }

  ngOnInit(): void {
    const localdata=localStorage.getItem('rawproduct')
    if(localdata!=null){
      this.data=JSON.parse(localdata)
    }  
  }

  updateProduct(id:any){
    localStorage.setItem('rawproduct',JSON.stringify(this.data))
    const data = {
      Image: this.data.Image,
      Number: this.data.Number,
      Name:this.data.Name,
      color:this.data.color,
      region:this.data.region,
      date:this.data.date
    }
    console.log(data)
    this.service.updateRaw(data,id).subscribe((datas)=>{
      console.log(datas)
      if(datas){
          Swal.fire( 'Updated successfully!', '', 'success').then(() =>{ 
            this.router.navigate(['/raw'])     
          }) 
          
      }
    })  
  }

  closeForm(){
    this.router.navigate(["raw"])
  } 

}
