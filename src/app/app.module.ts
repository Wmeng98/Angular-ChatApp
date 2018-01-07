import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormChatComponent } from './form-chat/form-chat.component';
import { RoomChatComponent } from './room-chat/room-chat.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserItemComponent } from './user-item/user-item.component';
// Need import router module an forms module here
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
//AngularFire Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { ChatServiceService } from './services/chat-service.service';
import { AuthenService } from './services/authen.service';
import { appRoutes } from '../routes';

import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FormChatComponent,
    RoomChatComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupComponent,
    NavbarComponent,
    UserlistComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,     // will be connection to firebase backend
    AngularFireModule.initializeApp(environment.firebase),

    //forms and router

  ],
  //List services as provider
  providers: [AuthenService, ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
