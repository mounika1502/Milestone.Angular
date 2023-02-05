import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data={
    image:'',
    Name:'',
    Quantity:'',
    Price:'',
    Number:'',
    Description:'',
  }

  constructor(private service:UpdateService,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(data =>{
      console.log(data)
    })  
  }
  closeForm(){

  }

  updateProduct(data:any){
    console.log(data)
    this.service.update(data,data._id).subscribe((datas)=>{
      console.log(datas)
    })
  }

}
