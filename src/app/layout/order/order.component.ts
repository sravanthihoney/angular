import { Component, OnInit } from '@angular/core';
// order.component.ts
import { CustomTableComponent } from 'src/app/shared/custom-table/custom-table.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  tblData:any;
  headArray=[{'Head':'username','FieldName':'name'},
  {'Head':'Email','FieldName':'email'},
  {'Head':'Contact','FieldName':'phone'},
  {'Head':'Status','FieldName':'status'},
  {'Head':'Action','FieldName':''}
]
constructor(){

}
ngOnInit(): void {
  this.fetchposts();
}

fetchposts(){
  this.tblData =[
    {
     
      "name":"sravanthi",
      "email":"srava@gmail.com",
      "phone":"123456789",
      "status":"active"
    },{
     
      "name":"sravanthi",
      "email":"srava@gmail.com",
      "phone":"123456789",
      "status":"active"
    },{
     
      "name":"sravanthi",
      "email":"srava@gmail.com",
      "phone":"123456789",
      "status":"active"
    },{
      
      "name":"sravanthi",
      "email":"srava@gmail.com",
      "phone":"123456789",
      "status":"active"
    },{
      "id":5,
      "name":"sravanthi",
      "email":"srava@gmail.com",
      "phone":"123456789",
      "status":"active"
    }
  ]
}
editOrder(item:any){
debugger;
}
deleteOrder(item:any){
  debugger;
}
viewOrder(item:any){
  debugger;
}
}
