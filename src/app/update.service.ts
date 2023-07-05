import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }

  // this is for product update call
   update(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/products/editProduct/' + id,data)
   }

   //this is for dealer update call
   updateDealer(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/dealer/editdealer/' + id,data)
  }
 //this is for order management order status update
  updateStatus(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/placeorders/orderStatus/' + id,data)
  }

  //this is for profile update
  updateProfile(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/signupform/editProfile/' + id ,data)
   }

    //this is for profile update
  updateRaw(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/raw/editRaw/' + id ,data)
   }

     //this is for Shipper update
  updateShipper(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/shippers/editShipper/' + id ,data)
   }

  updateManufacturer(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/manufacturer/edits/' + id ,data)
   }

   updateCompanyBio(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/signupform/addCompany/' + id,data)
   }

  
  
}
