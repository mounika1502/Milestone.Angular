import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dropdown: any;

  toggle(){
    this.dropdown = !this.dropdown
  }

  constructor() { }

  ngOnInit(): void {
  }

}
