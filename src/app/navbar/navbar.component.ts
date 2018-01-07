import { Component, OnInit } from '@angular/core';

import { AuthenService } from '../services/authen.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  userEmail: string;

  constructor(private authenService: AuthenService) { }

  ngOnInit() {
    this.user = this.authenService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  logout() {
    this.authenService.logout();
  }

}
