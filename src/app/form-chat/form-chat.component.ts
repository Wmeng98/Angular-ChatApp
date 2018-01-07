import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service'

@Component({
  selector: 'app-form-chat',
  templateUrl: './form-chat.component.html',
  styleUrls: ['./form-chat.component.css']
})
export class FormChatComponent implements OnInit {

  constructor(private chatService: ChatServiceService) { }
  // data in ngModel input orm will bind to message property
  message: string // corresponds to two way binding  
  
  ngOnInit() {
  }

  send() { // sendMessage method will be written in chat service 
    
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  hSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

}
