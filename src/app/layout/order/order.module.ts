import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CustomTableComponent } from 'src/app/shared/custom-table/custom-table.component';

@NgModule({
  declarations: [
    OrderComponent,
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
