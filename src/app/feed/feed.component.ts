import { Component, OnInit, OnChanges } from '@angular/core';

import { ChatServiceService } from '../services/chat-service.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(private chatService: ChatServiceService) { }

  ngOnInit() {
    this.feed = this.chatService.getMessages();
  }
  ngOnChanges() {
    this.feed = this.chatService.getMessages(); // f12 on getMessages redirects us to function implementation
  }

}
