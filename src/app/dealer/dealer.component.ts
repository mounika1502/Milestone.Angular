import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {
  dealer:any;
  popupform=false;
  popup=false;
  data4=false
  data=false;
  popupdata=false;
datas:any;
searchtext:any;
  registerForm: any;
  productform: any;
  sendemail: any;
  send:any;
  service: any;
  dealer1: any=[]
  dealers=false;
  text: any;
  aa: any;
  sign: any=[];
  List: any=[];
  array: any=[];
  SignupForm!:FormGroup;
  List1: any=[];
  add:any=[];
  Getdealer:any=[]
  location: any;
  firstname: any;
  lastname: any;
  Mobile: any;
  address: any;
  email: any;
  list:any;
  company:any;
  docId: any;
  localid: any;
  constructor() {

   }
  ngOnInit(): void {

    fetch("http://localhost:2000/signupform/getsignupdetails",{
      method:"GET",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify(this.Get)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.sign = result.SignupInfo
    console.log(this.sign)
    }
    ).catch(err =>
      console.log('error',err))
    this.Get();
    
    this.localid=JSON.parse(localStorage.getItem('docId')|| '{}')
    
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa) 
  }
  Get(){  
  }

  remove(){
    this.popupform=false;
    this.popupdata=false;
  }

data3(){
  this.data4=true;
  this.data=false;
  fetch("http://localhost:2000/dealer/getdealer",{
    method:"GET",
    headers:{
      "access-Control-Allow-Origin":"*",
    },
 
  })
  .then(response => response.json())
  .then(result =>{
    console.log(result),
    this.List1 = result.dealerInfo
  console.log(this.List1)
  }
  ).catch(err =>
    console.log('error',err))
}
Dealer(){
  this.dealers=true;
}
  data2(){
    this.array=this.sign.filter((item:any)=>item.UserType ==='Dealer')
    console.log(this.array)
     this.data=true;
    this.data4=false;
  }
  dealer2(data:any){  
    fetch("http://localhost:2000/dealer/adddealer",{
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type":'application/json'
      },
    body:JSON.stringify(data)
    
    })  .then(response => response.json())
    
    .then(result =>{
      this.docId=result.dealerInfo._id
      localStorage.setItem('docId',JSON.stringify(this.docId))
      console.log(this.docId)
      Swal.fire('Added to Mydealers!', '', 'success').then(() => {
     
      });
    }
      )
    .catch(error => console.log('error',error)); 
      }  

      dealerform(List1:any){
        this.text=List1
        localStorage.setItem('dataform',JSON.stringify(List1))

      }
  
  }
  
  

