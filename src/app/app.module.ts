import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "clarity-angular";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuardService } from './services/auth-guard.service'


import { AppComponent } from './app.component';
import { SignupComponent } from './components/customers/signup/signup.component';
import { SigninComponent } from './components/customers/signin/signin.component';
import { CompagniesComponent } from './components/compagnies/compagnies/compagnies.component';
import { CompagnyComponent } from './components/compagnies/compagny/compagny.component';

import 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';
import { PushService } from "./services/push.service";
import { ProductsComponent } from "./components/compagnies/compagnies/products/products/products.component";
import { ProductComponent } from "./components/compagnies/compagnies/products/product/product.component";
import { EventsComponent } from "./components/compagnies/compagnies/events/events/events.component";
import { CartComponent } from "./components/compagnies/compagnies/carts/carts.component";
import { InfosComponent } from "./components/compagnies/compagnies/infos/infos.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { StoresComponent } from './components/dashboard/stores/stores.component';

export const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'compagnies',
    component: CompagniesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'stores',
    component: StoresComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CompagniesComponent,
    ProductsComponent,
    CompagnyComponent,
    ProductComponent,
    EventsComponent,
    CartComponent,
    InfosComponent,
    NavbarComponent,
    OrdersComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    HttpModule
  ],
  providers: [AuthGuardService, PushService],
  bootstrap: [AppComponent]
})
export class AppModule { }
