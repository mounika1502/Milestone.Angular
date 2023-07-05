import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  

  Array:any=[];
  dealer:any;
  popupform=false;
  popup=false;
  data4=false;
  data=false;
  popupdata=false
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
  List1: any=[];
  adddata:any=[];
  SignupForm:any;
  docid: any;
  localIds: any;
  constructor() {
  this.Get()
   }
  ngOnInit(): void {
   this.data2();
   this.localIds=JSON.parse(localStorage.getItem('docIds')|| '{}')
   
    fetch("https://milestone-096608973980.herokuapp.com/signupform/getsignupdetails",{
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
    this.send = new FormGroup({
        To: new FormControl(),
        Subject : new FormControl(''),
        Message : new FormControl(''),
      });
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa) 
  }
  Get(){
  }
  sendmail(dealer:any){
this.popupdata=true;
this.registerForm = dealer
  } 
data3(){
  this.data4=true;
  this.data=false
  fetch("https://milestone-096608973980.herokuapp.com/manufacturer/getdata",{
    method:"GET",
    headers:{
      "access-Control-Allow-Origin":"*",
    }, 
  })
  .then(response => response.json())
  .then(result =>{
    console.log(result),
    this.List = result.SignData
  console.log(this.List)
  }
  ).catch(err =>
    console.log('error',err))
}
Dealer(){
  this.dealers=true;
}
  data2(){
    this.Array=this.sign.filter((item:any)=>item.UserType === 'Manufacturer')
    console.log(this.Array)
    this.data=true;
    this.data4=false;
  }
 

    dealer2(data:any){  
      fetch("https://milestone-096608973980.herokuapp.com/manufacturer/adddata",{
        method:'POST',
        headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":'application/json'
        },
      body:JSON.stringify(data)
      
      })  .then(response => response.json())
      
      .then(result =>{
        this.docid=result.SignData._id
        localStorage.setItem('docIds',JSON.stringify(this.docid))
        console.log(this.docid)
        Swal.fire('Added to My Manufacturers!', '', 'success').then(() => {
        
        });
      }
        )
      .catch(error => console.log('error',error)); 
        } 
Edit(Array:any){
  this.text=Array
  localStorage.setItem('Array',JSON.stringify(Array))

}
}
