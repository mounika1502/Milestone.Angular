import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {

  order: any;
  test: any;
  order2: any=[];
  datas:any=[]
  orderitems: any=[];
  Grandtotal: any;
  TotalPrice: any;
  Totalprice: any;


constructor(private apii:UpdateService) { 

}

  ngOnInit(): void {

    const localdata = localStorage.getItem('orderitems')  
    if(localdata!=null){                                                                                 
      this.order2 =JSON.parse(localdata) 
      console.log( this.order2);    
  }
}
update(id:any){
  localStorage.setItem('orderitems',JSON.stringify(this.order2))
  const data = {
    name: this.order2.name,
    imgurl:this.order2.imgurl,
    qnt:this.order2.qnt,
    price:this.order2.price,
    OrderStatus:this.order2.OrderStatus,
    ApproximateTime:this.order2.ApproximateTime,
    Grandtotal:this.Grandtotal,
    Totalprice:this.Totalprice
   
  }
  console.log(data)
  this.apii.updateStatus(data,id).subscribe((datas) => {
    console.log(datas,'datas')
    if(datas){
      Swal.fire('Updated Successfully!', '', 'success').then(() => {
        window.location.href='/ordermanage';
      });
    }
  })   

}
}