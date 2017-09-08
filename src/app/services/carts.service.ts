import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Cart } from '../models/cart'

import { CustomerService } from './customer.service';

@Injectable()
export class CartsService {

  constructor(private http: Http, private customerService: CustomerService) {
  }

  getAllForCompagny(compagnyId: String): Observable<Array<Cart>> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/api/compagnies/' + compagnyId + '/carts', options)
      .map((response: Response) =>
        response.json()
      );
  }

  confirm(compagnyId: String, cart: Cart): void {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/compagnies/' + compagnyId + '/carts/' + cart.id + '/confirm' , {}, options)
    .toPromise()
    .then((response: Response) =>
      response.json()
    );
  }
  
  cancel(compagnyId: String, cart: Cart): void {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/compagnies/' + compagnyId + '/carts/' + cart.id + '/cancel' , {}, options)
    .toPromise()
    .then((response: Response) =>
      response.json()
    );
  }
}
