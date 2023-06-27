import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessCategoryRoutingModule } from './business-category-routing.module';
import { BusinessCategoryComponent } from './business-category.component';


@NgModule({
  declarations: [
    BusinessCategoryComponent
  ],
  imports: [
    CommonModule,
    BusinessCategoryRoutingModule
  ]
})
export class BusinessCategoryModule { }
