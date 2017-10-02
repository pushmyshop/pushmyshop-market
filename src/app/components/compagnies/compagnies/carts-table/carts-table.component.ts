import { Component, Input, OnInit } from '@angular/core';
import { Cart } from "../../../../models/cart";
import { Comparator, SortOrder, State, Filter } from "clarity-angular";
import { CartsService } from "../../../../services/carts.service";


@Component({
  selector: 'app-carts-table',
  templateUrl: './carts-table.component.html',
  styleUrls: ['./carts-table.component.css']
})
export class CartsTableComponent implements OnInit {

  @Input() carts: Array<Cart>;
  originalCarts: Array<Cart>;
  @Input() compagnyId: String;
  sortOrder: SortOrder = SortOrder.Unsorted;

  constructor(public cartsService: CartsService) {
  }

  ngOnInit() {
  }

  confirm(cart: Cart) {
    this.cartsService.confirm(this.compagnyId, cart);
  }

  cancel(cart: Cart) {
    this.cartsService.cancel(this.compagnyId, cart);
  }

  refresh(state: State) {
    if (!this.originalCarts) {
      this.originalCarts = this.carts;
    }
    if (state.sort) {
      switch (state.sort.by) {
        case "cart.state":
          this.carts.sort((a, b) => a.state.localeCompare(b.state))
          if (state.sort.reverse)
            this.carts.reverse();
        case "cart.pickingName":
          this.carts.sort((a, b) => a.pickingName !== null && b.pickingName !== null && a.pickingName.localeCompare(b.pickingName));
          if (state.sort.reverse)
            this.carts.reverse();
      }
    }
    if (state.filters) {
      for (const index in state.filters) {
        const filter = state.filters[index.toString()];
        if (filter.property === "cart.pickingName") {
          this.carts = this.carts.filter(cart => cart.pickingName && cart.pickingName.startsWith(filter.value));
        }
        if (filter.property === "cart.pickingDate") {
          this.carts = this.carts.filter(cart => cart.pickingDate && cart.pickingDate.toString().startsWith(filter.value));
        }
        if (filter.property === "cart.state") {
          this.carts = this.carts.filter(cart => cart.state && cart.state.startsWith(filter.value));
        }
      }
    } else {
      if (this.carts.length !== this.originalCarts.length) {
        this.carts = this.originalCarts;
      }
    }
  }
}