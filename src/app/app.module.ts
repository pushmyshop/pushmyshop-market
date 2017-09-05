import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "clarity-angular";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import {AuthGuardService} from './services/auth-guard.service'


import { AppComponent } from './app.component';
import { SignupComponent } from './components/customers/signup/signup.component';
import { SigninComponent } from './components/customers/signin/signin.component';
import { CompagniesComponent } from './components/compagnies/compagnies/compagnies.component';
import { ProductsComponent } from './components/products/products/products.component';
import { CompagnyComponent } from './components/compagnies/compagny/compagny.component';
import { ProductComponent } from './components/products/product/product.component';
import { EventsComponent } from './components/events/events/events.component';

import 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';

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
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    HttpModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
