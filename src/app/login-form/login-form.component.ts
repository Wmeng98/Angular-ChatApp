import { Component } from '@angular/core';

import { AuthenService } from '../services/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string;
  password: string;
  errorMsg: string;

  constructor(private authenService: AuthenService, private router: Router) { 
  }
  login() {
    console.log('login() called from login-form component');
    this.authenService.login(this.email, this.password)
      .catch(error => this.errorMsg = error.message);
  }

  

}

/*this.authService.login(this.email, this.password).then(resolve => this.router.navigate(['chat']))
  .catch(error => this.errorMsg = error.message);
console.log(this.email); */