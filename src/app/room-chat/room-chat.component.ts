import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.css']
})
export class RoomChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller') private feedContainer: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  scrollToBottom()  {
    this.feedContainer.nativeElement.scrollTop
      = this.feedContainer.nativeElement.scrollHeight; // basically going to scroll the scroll the entire height of the div
  
  }
  ngAfterViewChecked() {
    this.scrollToBottom();  
  }

}
