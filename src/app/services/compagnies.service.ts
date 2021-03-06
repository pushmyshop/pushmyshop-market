import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Compagny } from '../models/compagny';

import { CustomerService } from './customer.service';
import { environment } from '../../environments/environment';



@Injectable()
export class CompagniesService {

  constructor(private http: Http, private customerService: CustomerService) {
  }

  updateLink(compagny: Compagny) {
    let headers = new Headers(
      { 'Authorization': 'Bearer ' + this.customerService.token, 'Content-Type': 'text/uri-list' });
    let options = new RequestOptions({ headers: headers });
    this.http.put(environment.urlOfApi + '/api/compagnies/' + compagny.id + '/customer', environment.urlOfApi + '/api/customers/' + this.customerService.customer.id, options).subscribe();
  }

  create(compagny: Compagny): Observable<Compagny> {
    let headers = new Headers({ 'Authorization': this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(environment.urlOfApi + '/api/compagnies', compagny, options)
      .map(
      (response: Response) => {
        return response.json();
      }
      );
  }

  update(compagny: Compagny): Observable<Compagny> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(environment.urlOfApi + '/api/compagnies/' + compagny.id, compagny, options)
      .map((response: Response) => {
        return response.json()
      }
      );
  }

  generateSite(compagny: Compagny): Observable<Compagny> {
    let headers = new Headers({ 'Authorization': this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(environment.urlOfApi + '/api/compagnies/' + compagny.id, compagny, options)
      .map(
      (response: Response) => {
        return response.json();
      }
      );
  }
  getAll(): Observable<Array<Compagny>> {
    let headers = new Headers({ 'Authorization': this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(environment.urlOfApi + '/api/customers/' + this.customerService.customer.id + '/compagnies', options)
      .map((response: Response) => response.json()._embedded.compagnies);
  }

  delete(compagny: Compagny): Observable<Boolean> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.customerService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(environment.urlOfApi + '/api/compagnies/' + compagny.id, options)
      .map((response: Response) => {
        return true;
      }
      );
  }

}
