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

  getAllForCompagny(compagnyId: String): Observable<Array<Product>> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/api/compagnies/' + compagnyId+'/products', options)
      .map((response: Response) =>
        response.json()._embedded.products
      );
  }
}
