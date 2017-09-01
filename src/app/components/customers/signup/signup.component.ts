import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [CustomerService]
})
export class SignupComponent implements OnInit {

  public customer: Customer = new Customer();

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  new() {
    this.customerService.new(this.customer);
  }
}
