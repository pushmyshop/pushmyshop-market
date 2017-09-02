import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [CustomerService]
})
export class SigninComponent implements OnInit {


  public customer: Customer = new Customer();
  public error: Boolean = false;

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.logout();
  }

  login() {
    this.customerService.login(this.customer).subscribe(
      result => {
        if (result === true) {
          this.customerService.getCurrentUser(this.customer.username).subscribe(
            result => {
              if (result === true) {
                this.router.navigate(['/compagnies']);
              } else {
                this.error = true;
              }
            },
            error => {
              this.error = true;
            });
        } else {
          this.error = true;
        }
      },
      error => {
        this.error = true;
      });
  }
}
