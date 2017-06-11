import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authServ: LoginService, private router: Router) {
    this.user = this.authServ.authUser();
  }

  user: Observable<firebase.User>;
  msg: string;
  email: string;
  password: string;

  signInUsingGmail() {
    this.authServ.login()
      .then(resolve => this.user.subscribe(user => {
        if (user != undefined && user != null) {
            console.log('url'+ this.authServ.redirecturl );
            let redirect = this.authServ.redirecturl ? this.authServ.redirecturl : '/manage-blogs';
            if(!this.authServ.checkUserExists(user.uid)){
              this.authServ.createUser({uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL}).then(resolve => this.router.navigate([redirect]));
            }
            else{
              this.router.navigate([redirect]);
            }
        }
      }))
      .catch(error => this.msg = error.message);
  }

}
