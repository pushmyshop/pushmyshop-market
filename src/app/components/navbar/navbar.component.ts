import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  title = 'PushMyShop!';
  isAuth: Boolean;

  subscription: Subscription;

  constructor(public authGuardService: AuthGuardService) {
    this.subscription = this.authGuardService.isAuth().subscribe(
      value => {
        this.isAuth = value;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
