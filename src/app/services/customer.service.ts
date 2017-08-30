import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  new(customer: Customer) {
    this.http
      .post('http://localhost:8080/api/customers', customer)
      .subscribe();
  }
}
