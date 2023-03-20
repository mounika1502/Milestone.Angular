import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  ProfileForm:any
  data: any;
  products: any;
  constructor(private service:UpdateService,private router:Router) { }

  ngOnInit(): void {
    const localdata=localStorage.getItem('Login')
    if(localdata!=null){
      this.data=JSON.parse(localdata)
    }
    console.log(this.data)

    this.ProfileForm = new FormGroup({
      Firstname:new FormControl(""),
      Lastname:new FormControl(""),
      mobile:new FormControl(""),
      Email:new FormControl(""),
      Password:new FormControl(""),
      City:new FormControl(""),
      Pincode:new FormControl(""),
      Street:new FormControl(""),
      State:new FormControl(""),
      Company:new FormControl(""),
      Location:new FormControl(""),
      bio:new FormControl("")
    })
  }

  updateProfile(Authentication:any){
     localStorage.setItem('Login',JSON.stringify(this.data))
    const data = {
      Firstname: this.data.Firstname,
      Lastname:this.data.Lastname,
      mobile:this.data.mobile,
      Email:this.data.Email,
      Password:this.data.Password,
      City:this.data.City,
      Pincode:this.data.Pincode,
      Street:this.data.Street,
      State:this.data.State,
      Company:this.data.Company,
      Location:this.data.Location,
      bio:this.data.bio,
    }
    console.log(data)
    this.service.updateProfile(data,Authentication).subscribe((datas)=>{
      console.log(datas)
      if(datas){
        alert('updated successfully')
      }
    })  
  }  

  //  updateProfile(data:any){
  //   console.log(this.ProfileForm)
  //   fetch("http://localhost:2000/signupform/editProfile/" + this.data.Authentication, {
  //     method: 'PUT',
  //     headers: {
  //       "access-Control-Allow-Origin": "*",        
  //       "Content-Type": 'application/json'
  //     },
  //     body: JSON.stringify(this.ProfileForm.value),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result),


  //         this.products = result  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
  //       console.log(this.products)
              
  //     }
  //     ).catch(err =>
  //       console.log(err))
  // }  

}
