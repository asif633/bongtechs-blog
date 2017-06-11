import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private logServ: LoginService, private router: Router) { }

  ngOnInit() {
  }
  
  logout(){
    this.logServ.logout().then(onresolve=> this.router.navigate(['../']));
  }
}
