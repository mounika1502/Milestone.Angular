import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  update(data:any,id:any){
    return this.http.put('https://milestone-096608973980.herokuapp.com/signupform/editProfile/' + id,data)
   }
}
