import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  public token: string;
  public customer: Customer;

  constructor(private http: Http) {
    var currentToken = JSON.parse(localStorage.getItem('currentToken'));
    var currentUser = JSON.parse(localStorage.getItem('currentCustomer'));
    this.token = currentToken && currentToken.token;
    this.customer = currentUser && currentUser.customer;

  }


  new(customer: Customer) {
    this.http
      .post('http://localhost:8080/api/customers', customer)
      .subscribe();
  }

  logout() {
    localStorage.removeItem('currentToken');
    localStorage.removeItem('currentCustomer');
  }


  getCurrentUser(username: String): Observable<Boolean> {
    let headers = new Headers({ 'Authorization': this.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/api/customers/search/findByUsername?username=' + username, options)
      .map((response: Response) => {
        let customerResponse = response.json();
        if (customerResponse) {
          this.customer = customerResponse;
          localStorage.setItem('currentCustomer', JSON.stringify({ customer: customerResponse }));
          return true;
        } else {
          return false;
        }
      });
  }

  login(customer: Customer): Observable<boolean> {
    return this.http
      .post('http://localhost:8080/login', JSON.stringify(customer))
      .map((response: Response) => {
        let tokenResponse = response.text();
        if (tokenResponse) {
          this.token = tokenResponse;
          localStorage.setItem('currentToken', JSON.stringify({ token: tokenResponse }));
          return true;
        } else {
          return false;
        }
      });
  }
}
