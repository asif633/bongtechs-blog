import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private afAuth: AngularFireAuth,
        private router: Router, private logServ: LoginService) {
        this.user = afAuth.authState;
    }

    user: Observable<firebase.User>;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let url: string = state.url;
        console.log('url'+ url );
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): Observable<boolean> {
        let url = `/${route.path}`;
        console.log('url'+ url );
        return this.checkLogin(url);
    }

    checkLogin(url: string): Observable<boolean> {
        return this.user.map((auth) => {
            if (!auth) {
                this.logServ.redirecturl = url;
                this.router.navigateByUrl('/signin');
                return false;
            }
            return true;
        }).take(1);
    }

}