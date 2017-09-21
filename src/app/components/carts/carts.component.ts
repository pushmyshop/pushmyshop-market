import { Component, OnInit, Input } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { Cart } from '../../models/cart';
import {PushService} from "../../services/push.service";


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  providers: [CartsService]
})
export class CartComponent implements OnInit {

  @Input() compagnyId: String;

  carts: Cart[];


  constructor(public cartsService: CartsService, private pushService: PushService) {

  }
  ngOnInit() {
    this.cartsService.getAllForCompagny(this.compagnyId).subscribe(
      result => {
        this.carts = result;
      });
    this.pushService.subscribeToPush(this.compagnyId);
  }

  confirm(cart : Cart) {
    this.cartsService.confirm(this.compagnyId, cart);
  }

  cancel(cart : Cart) {
    this.cartsService.cancel(this.compagnyId, cart);
  }

}
