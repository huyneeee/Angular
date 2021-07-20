import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { EditproductComponent } from './editproduct/editproduct.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
const routes: Routes = [
  { path: '', redirectTo: 'HomePage', pathMatch: 'full' },
  {
    path:'', component:HomePageComponent
  },
  {
    path:'product', component:ProductsComponent
  },
  {
    path:'addproduct', component:AddProductComponent
  },
  {
    path:'product/detail/:id', component:DetailProductComponent
  },
  {
    path:'product/edit/:id', component:EditproductComponent
  },
  {
    path:'**' , component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
