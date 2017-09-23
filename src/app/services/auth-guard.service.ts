import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }
    private auth = new Subject<boolean>();

    canActivate() {
        if (localStorage.getItem('currentCustomer') && localStorage.getItem('currentToken')) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }

    setAuth(value: boolean) {
        this.auth.next(value);
    }

    isAuth(): Observable<any> {
        return this.auth.asObservable();
    }
}