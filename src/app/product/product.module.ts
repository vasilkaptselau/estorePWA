import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsListComponent } from './containers/products-list/products-list.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductsListComponent, ProductDetailComponent, ProductsComponent, ProductComponent]
})
export class ProductModule { }
