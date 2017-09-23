import { Component, OnInit, Input } from '@angular/core';
import {ProductsService} from "../../../../../services/products.service";
import {CustomerService} from "../../../../../services/customer.service";
import {Product} from "../../../../../models/product";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService, CustomerService]
})
export class ProductsComponent implements OnInit {

  @Input() compagnyId: String;

  products: Array<Product>;

  public newProduct: Product = new Product();

  constructor(public productsService: ProductsService) {

  }
  ngOnInit() {
    this.productsService.getAllForCompagny(this.compagnyId).subscribe(
      result => {
        this.products = result;
      })
  }

}
