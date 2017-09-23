import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../../../models/product";
import {ProductsService} from "../../../../../services/products.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() compagnyId: String;

  @Input() product: Product;

  @Input() products: Array<Product>;

  constructor(public productsService: ProductsService) {
  }
  ngOnInit() {
  }

  save(product) {
    this.productsService.save(product).subscribe(
      newProduct => {
        this.products[this.products.indexOf(product)] = newProduct
      })
  }

  delete(product) {
    this.productsService.delete(product).subscribe(
      result => {
        this.products.splice(this.products.indexOf(product), 1)
      })
  }

  new() {
    this.productsService.create(this.product).subscribe(
      newProduct => {
        this.productsService.updateLink(newProduct, this.compagnyId);
        this.products.push(newProduct);
        this.product = new Product();
      })
  }

}
