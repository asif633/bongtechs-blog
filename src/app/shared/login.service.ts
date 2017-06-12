import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LoginService {
    
    private user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth, private afdb: AngularFireDatabase) {
        this.user = afAuth.authState;
    }
    
    redirecturl: string;

    authUser(): Observable<firebase.User>{
        return this.user;
    }

    login() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        return this.afAuth.auth.signOut();
    }

    checkUserExists(uid: string): boolean{
        if(this.afdb.list('users').$ref.ref.key == uid){
            return true;
        }
        else return false;
    }

    createUser(user: User){
        return this.afdb.list('users').$ref.ref.child(user.uid).set(user);
    }

}