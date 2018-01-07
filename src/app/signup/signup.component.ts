import { Component } from '@angular/core';
// login form
import { Router } from '@angular/router';
import { AuthenService } from '../services/authen.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  constructor(private authenService: AuthenService, private router: Router) { }

  signUp() {
    //thin wrapper around sign up aroud our auth service
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;
    this.authenService.signUp(email, password, displayName).then(resolve => this.router.navigate(['chat'])) // just using router to navigate to the chatroom)
      .catch(error => this.errorMsg = error.message);
  }

}
