import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/internal/operators';
import {UiService} from '../../../ui/services/ui.service';

@Component({
  selector: 'app-products-list',
  template: `
    <app-products [products]="products"></app-products>
  `,
  styles: []
})
export class ProductsListComponent implements OnInit {


  public products: Product[] = [];
  constructor(private route: ActivatedRoute, private ui: UiService) { }

  ngOnInit() {
    this.route.data.pipe(
      map(data => data['products']),
      tap(products => this.metaData(products)),
    ).subscribe(res => this.products =  res);

    }

    metaData(products: Product[]) {
    this.ui.setMetaData({
      title: 'Our Products for everyone',
      description: `Best collection of ${products.length} product`
    });
    }

}
