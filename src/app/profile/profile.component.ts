import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loginData:any=[]
  data:any
  datas:any=[];
  editform=false
  SignupForm: any;
  submit: any;
  form:any
  
  // profileForm:any={
  //   id:'',
  //   Firstname:'',
  //   Lastname:'',
  //   mobile:'',
  //   Email:'',
  //   Password:'',
  //   Address:'',
  
  // }
  final:any;
  finals:any
  constructor(private service:ProfileService) {}
  

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('Login')||'{}')   
    this.loginData = this.data  
    console.log(this.loginData)

  }
  closeForm(){
    this.editform = false
  }

  edit(loginData:any){
    this.editform = true
    this.SignupForm = loginData
  }
  
  updateData(docId:any){
    const data = {
      Firstname: this.SignupForm.Firstname,
      Lastname:this.SignupForm.Lastname,
      mobile:this.SignupForm.mobile,
      Email:this.SignupForm.Email,
      Password:this.SignupForm.Password,
      // Address:this.SignupForm.Address,
      docId:this.SignupForm.docId
    }
    console.log(data)
    this.service.update(data,docId).subscribe((datas)=>{
      console.log(datas)
      if(datas){
        alert('updated successfully')
      }
    })  
  }

  //signup details post call
  // signupSubmit(){
  //   this.data=JSON.parse(localStorage.getItem('login')||'{}') 
      
  //   for(let i=0;i<this.data.length;i++){
  //     this.finals =this.data[i]
  //   }
  //   console.log(this.finals.Email)

  //   this.datas =  this.finals.find((item:any) => item.email === this.finals.Email);
  //   console.log(this.datas)

  // }
    // fetch("http://localhost:2000/signupform/getsignupdetails", {
    //   method:'get',
    //    }).then(res=> res.json())
    // .then(result=>{ 
    //   console.log(result)
    //   this.datas = this.data.find((item:any) => item.Email === this.details);
    //   console.log(this.datas)
    // }    
    // )
    //   .catch(error => console.log('error',error))      
      //window.location.href=''
    
  

}
