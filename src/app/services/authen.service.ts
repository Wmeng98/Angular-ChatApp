import { Injectable } from '@angular/core';

//imports
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthenService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) { 
    this.user = afAuth.authState;
  }

  // Authservice method
  authUser() {
    return this.user;
  }
  //

  get currentUserID(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.setUserStatus('online');
        this.router.navigate(['chat']);
      });
  }


  /*firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });  */


  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }
 /* logout() {
    alert(5);
    return this.afAuth.auth.
        const status = 'offline';
        this.setUserStatus(status);
        this.router.navigate(['/']);
        this.authState = '';
      }
  } */

  signUp(email: string, password: string, displayName: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((user)=> {
      this.authState = user;
      const status = 'online';
      this.setUserData(email, displayName, status);
    }).catch(error => console.log(error));
  }

  

  setUserData(email: string, displayName: string, status: string): void {
    const path = `users/${this.currentUserID}`;
    const data = {
      email: email,
      displayName: displayName,
      status: status
    };
    
    //now can use angularfire database to update a particular object
    this.db.object(path).update(data).catch(error => console.log(error));
  }







  // setUserStatus function similar to setUserData except set an exisitng userStatus to online
  setUserStatus(status: string): void {
    const path = `users/${this.currentUserID}`;
    const data = {
      status: status
    };
    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }







}
