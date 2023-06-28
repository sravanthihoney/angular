import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  @Input() HeadArray :any[] = [];
  @Input() tblData :any[]=[] ;
  @Output() onEdit =new EventEmitter<any>();
  @Output() onDelete =new EventEmitter<any>(); 
  @Output() onView =new EventEmitter<any>();
  dtoptions:DataTables.Settings={};
  constructor(){}
  ngOnInit(): void {
    
  }
  edit(item:any){
 this.onEdit.emit(item);
  }
  delete(item:any){
   this.onDelete.emit(item);
  }
  view(item:any){
  this.onView.emit(item);
  }
}
