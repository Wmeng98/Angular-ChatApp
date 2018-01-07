import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { ChatServiceService } from '../services/chat-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent{
  users: User[];
  
  constructor(chatService: ChatServiceService) {


      chatService.getUsers().subscribe(users => {
        this.users = users;
      });
   }

}
