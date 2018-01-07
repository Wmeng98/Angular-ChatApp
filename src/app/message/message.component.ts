import { Component, OnInit, Input } from '@angular/core';

import { ChatServiceService } from '../services/chat-service.service';
import { AuthenService } from '../services/authen.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  isOwnMessage: boolean;
  ownEmail: string;  
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();


  constructor(private authenService: AuthenService) {
    authenService.authUser().subscribe(user => {
      this.ownEmail = user.email;
      this.isOwnMessage = this.ownEmail === this.userEmail;
    });
   }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
  }

}
