import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  data: any;
  constructor(private service:UpdateService,private router:Router) { }

  ngOnInit(): void {
    

    const localdata=localStorage.getItem('Profile')
    if(localdata!=null){
      this.data=JSON.parse(localdata)
    }
    console.log(this.data)

  }

  updateData(id:any){
    localStorage.setItem('product',JSON.stringify(this.data))
    const data = {
      Firstname: this.data.Firstname,
      Lastname:this.data.Lastname,
      mobile:this.data.mobile,
      Email:this.data.Email,
      Password:this.data.Password,
      City:this.data.City,
      Pincode:this.data.Pincode,
      Street:this.data.Street,
      State:this.data.State
    }
    console.log(data)
    this.service.updateProfile(data,id).subscribe((datas)=>{
      console.log(datas)
      if(datas){
        alert('updated successfully')
      }
    })  
  }  

}
