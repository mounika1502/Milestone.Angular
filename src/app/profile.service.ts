import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  update(data:any,id:any){
    return this.http.put('http://localhost:2000/signupform/editProfile/' + id,data)
   }
}
