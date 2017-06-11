import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authServ: LoginService, private router: Router) { }
  
  user: Observable<firebase.User>;

  ngOnInit() {
    this.user = this.authServ.authUser();
  }

  signout() {
    this.authServ.logout().then(onResolve => this.router.navigate(['/']));
  }

}
