import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Customer } from '../models/customer';
import { Product } from '../models/product'

import { CustomerService } from './customer.service';

@Injectable()
export class ProductsService {

  constructor(private http: Http, private customerService: CustomerService) {
  }

  updateLink(product: Product, compagnyId: String) {
    let headers = new Headers(
      { 'Authorization': 'Bearer ' + this.customerService.token, 'Content-Type': 'text/uri-list' });
    let options = new RequestOptions({ headers: headers });
    this.http.put('http://localhost:8080/api/products/' + product.id + '/compagny', 'http://localhost:8080/api/compagny/' + compagnyId, options).subscribe();
  }

  create(product: Product): Observable<Product> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/api/products', product, options)
      .map((response: Response) =>
        response.json()
      );
  }
  save(product: Product): Observable<Product> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:8080/api/products/' + product.id, product, options)
      .map((response: Response) => {
        return response.json()
      }
      );
  }

  delete(product: Product): Observable<Boolean> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:8080/api/products/' + product.id, options)
      .map((response: Response) => {
        return true;
      }
      );
  }
  getAllForCompagny(compagnyId: String): Observable<Array<Product>> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/api/compagnies/' + compagnyId + '/products', options)
      .map((response: Response) =>
        response.json()._embedded.products
      );
  }
}
