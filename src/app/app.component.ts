import { Component, OnInit } from '@angular/core';

import { CustomerService } from './services/customer.service';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import 'clarity-icons/shapes/all-shapes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent implements OnInit {
  title = 'PushMyShop!';

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.logout();
  }
}
