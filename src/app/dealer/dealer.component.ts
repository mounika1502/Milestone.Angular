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
  searchtext:any
  popupform=false;
  popup=false;
  popupdata=false
  datas:any;
  registerForm: any;
  productform: any;
  sendemail: any;
  send:any;
  text: any=[];
  aa: any=[];

  constructor( private service:UpdateService) { 
    this.Get()
  }

  ngOnInit(): void {
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
    fetch("http://localhost:2000/dealer/getdealer",{
      method:"GET",
      headers:{
        "access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify(this.dealer)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result),
      this.dealer = result.dealerInfo
    console.log(this.dealer)
    }
    ).catch(err =>
      console.log('error',err))   
  }

  sendmail(dealer:any){
    this.popupdata=true;
    this.registerForm = dealer
  }
    
  Delete(_id:any){
    console.log(_id)
      fetch("http://localhost:2000/dealer/deletedealer/" + _id,{
       method:'DELETE',
        headers:{
         "access-Control-Allow-Origin":"*"
        },
        })
        .then(response => response.json())
        .then(result=>{
         console.log(result)
         this.Get()
         const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "Do You Want To Delete This!?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.reload()         
          } else if (   
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })
        }
        ).catch(err =>
         console.log(err))    
     }
     Edit(dealer:any){
          this.popupform=true;
          this.registerForm = dealer
          localStorage.setItem('edit',JSON.stringify(dealer))
        }
        remove(){
          this.popupform=false;
          this.popupdata=false;
        }
       
    sendmessage(){
      this.remove();
      if(this.send.value.To==''||this.send.value.Subject==''||this.send.value.Message==''){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }else{
       
      var requestOptions = {
        method: 'POST',
        body:JSON.stringify(this.send.value)
      };
      console.log(requestOptions);  
      fetch("http://localhost:2000/email/emailnotification",{
        method:'POST',
        headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":'application/json'
        },
      body:JSON.stringify(this.send.value)
      })  .then(response => response.json())
      .then(result =>
        console.log(result))
      .catch(error => console.log('error',error));
     
    }
  }
  
  }
  
  

