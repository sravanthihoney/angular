import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCategoryComponent } from './business-category.component';

const routes: Routes = [{ path: '', component: BusinessCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessCategoryRoutingModule { }
