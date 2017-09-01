import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  public token: string;

  constructor(private http: Http) {
    var currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
    this.token = currentCustomer && currentCustomer.token;
  }


  new(customer: Customer) {
    this.http
      .post('http://localhost:8080/api/customers', customer)
      .subscribe();
  }

  logout() {
    localStorage.removeItem('currentCustomer');
  }

  login(customer: Customer): Observable<boolean> {
    return this.http
      .post('http://localhost:8080/login', JSON.stringify(customer))
      .map((response: Response) => {
        let token = response.text();
        if (token) {
          this.token = token;
          localStorage.setItem('currentCustomer', JSON.stringify({ customer: customer, token: token }));
          return true;
        } else {
          return false;
        }
      });
  }
}
