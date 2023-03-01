import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menubar';
  
  showHeader = false;
  showLogin = true;

  data: any=[]
  aa: any={}
  text: any;
  
  constructor(private router: Router){
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
          this.showLogin = false;
        }
      }
    });
  } 
 
  ngOnInit(): void {
    this.text = JSON.parse(localStorage.getItem('Login')||'{}') 
    console.log(this.text)
    this.aa=this.text.UserType
    console.log(this.aa)
   // console.log(this.text.UserType)
 }

  logout(){
      localStorage.clear();
      window.location.href=("/login")
  }
  

 
 

}
