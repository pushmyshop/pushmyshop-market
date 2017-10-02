import { Component, Input, OnInit } from '@angular/core';
import { Cart } from "../../../../models/cart";
import { CartsService } from "../../../../services/carts.service";
import { PushService } from "../../../../services/push.service";


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  providers: [CartsService]
})
export class CartComponent implements OnInit {

  @Input() compagnyId: String;

  pendingCarts: Cart[];
  confirmedCarts: Cart[];


  constructor(public cartsService: CartsService, private pushService: PushService) {

  }
  ngOnInit() {
    this.refreshLists();
    this.pushService.subscribeToPush(this.compagnyId);
  }

  refreshLists() {
    this.cartsService.getAllForCompagny(this.compagnyId).subscribe(
      result => {
        this.pendingCarts = result.filter(cart => cart.state !== 'CONFIRMED');
        this.confirmedCarts = result.filter(cart => cart.state === 'CONFIRMED');
      });
  }

}
