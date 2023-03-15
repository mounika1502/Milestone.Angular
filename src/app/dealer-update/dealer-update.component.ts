import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-dealer-update',
  templateUrl: './dealer-update.component.html',
  styleUrls: ['./dealer-update.component.css']
})
export class DealerUpdateComponent implements OnInit {

  dealer:any;
  popupform=false;
  popup=false;
  popupdata=false
datas:any;
  registerForm: any;
  productform: any;
  sendemail: any;
  send:any;
  dealer1: any=[]
  data: any;
  
  constructor(private service:UpdateService,private router:Router) {
  
   }
   
  ngOnInit(): void {
    const localdata = localStorage.getItem('edit')  
    if(localdata!=null){                                                                                 
      this.dealer1 =JSON.parse(localdata) 
      console.log( this.dealer1);    
  }
  }  
  update(id:any){

    localStorage.setItem('edit',JSON.stringify(this.dealer1))
        const data = {
          Image: this.dealer1.Image,
          FirstName:this.dealer1.FirstName,
          LastName:this.dealer1.LastName,
          Address:this.dealer1.Address,
          PrimaryPhoneNumber:this.dealer1.PrimaryPhoneNumber,
          BusinessNumber:this.dealer1.BusinessNumber,
          CompanyName:this.dealer1.CompanyName,
          Email:this.dealer1.Email,
          StoreId:this.dealer1.StoreId
        }
        console.log(data)
        this.service.updateDealer(data,id).subscribe((datas)=>{
          console.log(datas)
          
          if(datas){
            Swal.fire('Updated Successfully!', '', 'success').then(() => {
              this.router.navigate(['/dealer'])
            }); 
           
          }
        
        })
      }

}
