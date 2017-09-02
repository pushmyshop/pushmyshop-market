import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('currentCustomer') && localStorage.getItem('currentToken')) {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}