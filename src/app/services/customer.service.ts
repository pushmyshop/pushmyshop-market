import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Customer } from '../models/customer'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthGuardService } from './auth-guard.service';
import { environment } from '../../environments/environment';

@Injectable()
export class CustomerService {

  public token: string;
  public customer: Customer;

  constructor(private http: Http, public authGuardService: AuthGuardService) {
    var currentToken = JSON.parse(localStorage.getItem('currentToken'));
    var currentUser = JSON.parse(localStorage.getItem('currentCustomer'));
    this.token = currentToken && currentToken.token;
    this.customer = currentUser && currentUser.customer;
  }


  new(customer: Customer): Observable<Response> {
    return this.http
      .post(environment.urlOfApi + '/api/customers', customer);
  }

  logout() {
    this.authGuardService.setAuth(false);
    localStorage.removeItem('currentToken');
    localStorage.removeItem('currentCustomer');
  }

  getCurrentUser(username: String): Observable<Boolean> {
    let headers = new Headers({ 'Authorization': this.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(environment.urlOfApi + '/api/customers/search/findByUsername?username=' + username, options)
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
      .post(environment.urlOfApi + '/login', JSON.stringify(customer))
      .map((response: Response) => {
        let tokenResponse = response.text();
        if (tokenResponse) {
          this.token = tokenResponse;
          localStorage.setItem('currentToken', JSON.stringify({ token: tokenResponse }));
          this.authGuardService.setAuth(true);
          return true;
        } else {
          return false;
        }
      });
  }
}
