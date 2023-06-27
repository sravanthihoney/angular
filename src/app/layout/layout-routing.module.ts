import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{ path: "",
component: LayoutComponent,
children: [
  {
    path: 'layout',
    redirectTo: '/category',
    pathMatch: 'full'
  },
  { path: 'category', 
  loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)},
  
  { path: 'order', 
  loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},

  { path:'bCategory', 
  loadChildren: () => import('./business-category/business-category.module').then(m =>m.BusinessCategoryModule)
  },
  { path:'vendor', 
  loadChildren: () => import('./vendor/vendor.module').then(m =>m.VendorModule)
  },
  { path:'subcategory', 
  loadChildren: () => import('./subcategory/subcategory.module').then(m =>m.SubcategoryModule)
  },
  { path:'services', 
  loadChildren: () => import('./services/services.module').then(m =>m.ServicesModule)
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
