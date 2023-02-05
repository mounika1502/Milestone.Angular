import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }
   update(data:any,id:any){
    return this.http.put('http://localhost:2000/products/editProduct/' + id,data)
   }


  
  
}
