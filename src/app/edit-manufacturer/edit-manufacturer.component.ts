import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html',
  styleUrls: ['./edit-manufacturer.component.css']
})
export class EditManufacturerComponent implements OnInit {


  dealer:any;
  popupform=false;
  popup=false;
  popupdata=false;
datas:any;
  registerForm: any;
  productform: any;
  sendemail: any;
  send:any;
  Manufacturer: any=[];
  data: any;
  constructor(private service:UpdateService){
  }  
  ngOnInit(): void {
    const localdata = localStorage.getItem('Array')  
    if(localdata!=null){                                                                                 
      this.Manufacturer =JSON.parse(localdata) 
      console.log( this.Manufacturer);    
  }
  }
      update(id:any){
    localStorage.setItem('dataform',JSON.stringify(this.Manufacturer))
        const data = {
   
          Firstname:this.Manufacturer.Firstname,
          Lastname:this.Manufacturer.Lastname,
          Address:this.Manufacturer.Address,
          mobile:this.Manufacturer.mobile,
    
          Company:this.Manufacturer.Company,
          Email:this.Manufacturer.Email,
          Location:this.Manufacturer.Location
        }
        console.log(data)
        this.service.updateManufacturer(data,id).subscribe((datas)=>{
          console.log(datas)
          
          if(datas){
            Swal.fire('Updated Successfully!', '', 'success').then(() => {
              
            }); 
           
          }
        
        })
      }

}
