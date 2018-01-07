import { Injectable } from '@angular/core';
// Need make all necessary imports from Firebase
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthenService } from '../services/authen.service';
import * as firebase from 'firebase/app'; // import Vanilla firebase
import { ChatMessage } from '../models/chat-message.model'; // Model will represent the structureof message object 
// we want firebase to store for us


@Injectable()
export class ChatServiceService {
  user: firebase.User;
  
  chatMsgs: FirebaseListObservable<ChatMessage[]>;
  chatMsg: ChatMessage
  userName: Observable<string>;

  // inject angular fire services
  constructor( private db: AngularFireDatabase, private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(auth => {
      if(auth !== undefined && auth !== null) {
        this.user = auth;
      }
      this.getUser().subscribe(a => {
        this.userName = a.displayName;
      });
    });
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`; // whe using interpolation use `` NOT ''(single quotes) to wrap a stringPform
    return this.db.object(path); // returns an observable that we can subscribe to and set the username
    // on the class in this service inside the actual subscribe name
  }

  getUsers() { // get all users
    const path = '/users';
    return this.db.list(path);
  }

  sendMessage(msg: string) {
    // what post timestamp, email address, and array of chat messages, ad push new msg onto chatMessages
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMsgs = this.getMessages();
    this.chatMsgs.push({
      message: msg,
      timeSent: timestamp,
      userName: this.userName,
      email: email});
  }

  //get Message needs to actually converse with firebase backend
  getMessages(): FirebaseListObservable<ChatMessage[]> {
    //creating a search to create our feed messaging binding
    // gonna use angular fire database to return an observable we can subscribe to here
    // gonna return a list
    
    return  this.db.list('messages', {
      query: {
        limitToLast: 20,
        orderByKey: true //only grab last 20 messages and order by key, not dynamically generating mesages only limiting

      }
    });
  }

  getTimeStamp() {
    // want to return a valid data format that we can pipe
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();

    return (date + ' ' + time);
  }

}
