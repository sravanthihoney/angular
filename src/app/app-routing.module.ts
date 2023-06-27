import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  
// {
//   path:'layout',component:LayoutComponent
// },
  
{ path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  
{ path: 'layout/order', loadChildren: () => import('./layout/order/order.module').then(m => m.OrderModule) },
  
{ path: 'layout/businessCategory', loadChildren: () => import('./layout/business-category/business-category.module').then(m => m.BusinessCategoryModule) },
  
{ path: 'layout/vendor', loadChildren: () => import('./layout/vendor/vendor.module').then(m => m.VendorModule) },
  
{ path: 'layout/subcategory', loadChildren: () => import('./layout/subcategory/subcategory.module').then(m => m.SubcategoryModule) },
  
{ path: 'layout/services', loadChildren: () => import('./layout/services/services.module').then(m => m.ServicesModule) },
  
// { path: 'layout/category', loadChildren: () => import('./layout/category/category.module').then(m => m.CategoryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
