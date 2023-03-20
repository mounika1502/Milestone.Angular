import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-updatedealer',
  templateUrl: './updatedealer.component.html',
  styleUrls: ['./updatedealer.component.css']
})
export class UpdatedealerComponent implements OnInit {

  dealer:any;
  popupform=false;
  popup=false;
  popupdata=false;
datas:any;
  registerForm: any;
  productform: any;
  sendemail: any;
  send:any;
  dealer1: any=[];
  data: any;
  constructor(private service:UpdateService){
  }  
  ngOnInit(): void {
    const localdata = localStorage.getItem('dataform')  
    if(localdata!=null){                                                                                 
      this.dealer1 =JSON.parse(localdata) 
      console.log( this.dealer1);    
  }
  }
      update(id:any){
    localStorage.setItem('dataform',JSON.stringify(this.dealer1))
        const data = {
   
          Firstname:this.dealer1.Firstname,
          Lastname:this.dealer1.Lastname,
          Address:this.dealer1.Address,
          mobile:this.dealer1.mobile,
    
          Company:this.dealer1.Company,
          Email:this.dealer1.Email,
          Location:this.dealer1.Location
        }
        console.log(data)
        this.service.updateDealer(data,id).subscribe((datas)=>{
          console.log(datas)
          
          if(datas){
            Swal.fire('Updated Successfully!', '', 'success').then(() => {
              window.location.href='/dealer';
            }); 
           
          }
        
        })


}
}