import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data4=false
  data=false; 
  searchtext:any;  
  sendemail: any;  
  text: any;
  aa: any;
  sign: any=[]; 
  array: any=[];  
  localid: any;  
  Array:any;
  Arrayobj:any=[];
  Arraydata:any=[]
  data1=true;
  dataform=false;
  datatext=false;
  constructor() {
   }
  ngOnInit(): void {

  this.All();
  this.data3();
  
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)

    this.Get();
    // this.array=this.sign.filter((item:any)=>item.UserType ==='Dealer')
    // console.log(this.array)
    // this.data=true;
    // this.data4=false;
    
    this.localid=JSON.parse(localStorage.getItem('docId')|| '{}')
    
    // this.send = new FormGroup({
    //     To: new FormControl(),
    //     Subject : new FormControl(''),
    //     Message : new FormControl(''),
    //   });
      this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
      console.log(this.text)
      this.aa=this.text.UserType
      console.log(this.aa) 
  }
  Get(){
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
    localStorage.setItem('userdata',JSON.stringify(this.sign))
    }
    ).catch(err =>
      console.log('error',err))
  }
  data2(){
    this.Array=this.sign.filter((item:any)=>item.UserType === 'Manufacturer')
    console.log(this.Array)
    this.data=true;
    this.data1=false
    // this.data4=false;
  }
  data3(){
    this.Arrayobj=this.sign.filter((item:any)=>item.UserType === 'Dealer')
    console.log(this.Arrayobj)
    this.data=false;
    this.data1=false
    this.dataform=true;
    // this.data4=false;
  }
  data5(){
    this.Arraydata=this.sign.filter((item:any)=>item.UserType === 'admin')
    console.log(this.Arraydata)
    this.data=false;
    this.data1=false
    this.datatext=true;
    this.data1=false
    this.dataform=false;
    // this.data4=false;
  }
  All(){
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
    localStorage.setItem('user',JSON.stringify(this.sign))
    }
    ).catch(err =>
      console.log('error',err))
      this.data1=true;
  }

}
