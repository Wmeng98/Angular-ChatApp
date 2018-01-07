// Used to visit 3 seperate pages of this application

import {Routes} from '@angular/router';
import {SignupComponent} from './app/signup/signup.component';
import {LoginFormComponent} from './app/login-form/login-form.component';
import {RoomChatComponent} from './app/room-chat/room-chat.component';
// gives us ability to visit various pages of the application depending on the URL
export const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'chat', component: RoomChatComponent},
    { path:'', redirectTo: '/login', pathMatch: 'full' }, //default path to login component
];