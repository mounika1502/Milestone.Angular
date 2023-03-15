import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }

  // this is for product update call
   update(data:any,id:any){
    return this.http.put('http://localhost:2000/products/editProduct/' + id,data)
   }

   //this is for dealer update call
   updateDealer(data:any,id:any){
    return this.http.put('http://localhost:2000/dealer/editdealer/' + id,data)
  }
 //this is for order management order status update
  updateStatus(data:any,id:any){
    return this.http.put('http://localhost:2000/placeorders/orderStatus/' + id,data)
  }

  //this is for profile update
  updateProfile(data:any,id:any){
    return this.http.put('http://localhost:2000/signupform/editProfile/' + id ,data)
   }
    //this is for profile update
  updateRaw(data:any,id:any){
    return this.http.put('http://localhost:2000/raw/editRaw/' + id ,data)
   }



  
  
}
