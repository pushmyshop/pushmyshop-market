import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "clarity-angular";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { SignupComponent } from './components/customers/signup/signup.component';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
