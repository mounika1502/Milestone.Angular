import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CactivateGuard implements CanActivate {

  constructor(public rtr: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if(localStorage.getItem("Login") == null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Login!'
      })
      this.rtr.navigate(["login"])
      return false
    }else{
      return true
    }
  }
  
}
