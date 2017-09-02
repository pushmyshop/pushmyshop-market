import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Customer } from '../models/customer';
import { Compagny } from '../models/compagny';

import { CustomerService } from './customer.service';


@Injectable()
export class CompagniesService {

  constructor(private http: Http, private customerService: CustomerService) {
  }

  getAll(): Observable<Array<Compagny>> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/api/customers/' + this.customerService.customer.id + '/compagnies', options)
      .map((response: Response) => response.json()._embedded.compagnies);
  }
}
