import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './containers/products-list/products-list.component';
import {ProductDetailComponent} from './containers/product-detail/product-detail.component';
import {ProductsResolver} from './resolvers/products.resolver';
import {ProductResolver} from './resolvers/product.resolver';

const routes: Routes = [
  {path: '', component: ProductsListComponent, resolve: {products: ProductsResolver}},
  {path: ':id', component: ProductDetailComponent, resolve: {product: ProductResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
