import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loginData:any
  text:any=[]
  datas:any=[];
  editform=false
  SignupForm: any;
  submit: any;
  form:any
  final:any;
  finals:any
  profileForm:any={
    Firstname:'',
    Lastname:'',
    mobile:'',
    Email:'',
    Password:'',
    City:'',
    Pincode:'',
    Street:'',
    State:'',
    
  }

   updateform!:FormGroup
   products: any=[]

  constructor(private service:ProfileService, private fb:FormBuilder) {}
  

  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
     console.log(this.text)
     
    // for(let i=0;i<this.data.length;i++){
    //  this.loginData =this.data[i]
    // }
    //this.loginData = this.data  
    // console.log(this.loginData)

    this.updateform = this.fb.group({
      Firstname:[''],
      Lastname:[''],
      mobile:[''],
      Email:[''],
      Password:[''],
      City:[''],
      Pincode:[''],
      Street:[''],
      State:['']
    })

  }

  logout(){
    localStorage.clear();
    window.location.href=("/login")
  }

  closeForm(){
    this.editform = false
  }

  edit(loginData:any){
    this.editform = true
     this.profileForm = loginData
  }
  
  // updateData(id:any){
  //   const data = {
  //     Firstname: this.profileForm.Firstname,
  //     Lastname:this.profileForm.Lastname,
  //     mobile:this.profileForm.mobile,
  //     Email:this.profileForm.Email,
  //     Password:this.profileForm.Password,
  //     City:this.profileForm.City,
  //     Pincode:this.profileForm.Pincode,
  //     Street:this.profileForm.Street,
  //     State:this.profileForm.State
  //   }
  //   console.log(data)
  //   this.service.update(data,id).subscribe((datas)=>{
  //     console.log(datas)
  //     if(datas){
  //       alert('updated successfully')
  //     }
  //   })  
  // }   


  ///---update function---///
  updateProfile(data:any){
    console.log(data)
    //console.log(this.description, this.image, this.price, this.description, this.name)
    console.log(this.text.id)
    fetch("https://powerful-erin-gopher.cyclic.app/signupform/editProfile/" + this.text.id, {
      method: 'PUT',
      headers: {
        "access-Control-Allow-Origin": "*",        
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data),        // JSON Means An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.

    })
      .then(response => response.json())
      .then(result => {
        console.log(result),

          this.products =JSON.parse(result)  //it  runs $parse automatically when it runs the $digest loop, basically $parse is the way angular evaluates expressions
        console.log(this.products)
        //this.updateproductForm.reset();   // form reset
        //window.location.reload()  // reloading window
        
      }

      ).catch(err =>
        console.log(err))
  }
  

}
