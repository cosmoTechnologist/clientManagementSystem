import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseService } from './services/firebase.service';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';

import { AuthService } from './auth.service';
import { routes } from './app.routes';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

export const firebaseConfig ={
    apiKey: "AIzaSyCDjtlhDGePZgb-zN_YCHTmGXt28POOCdI",
    authDomain: "clientmanagementsystem-b0bd6.firebaseapp.com",
    databaseURL: "https://clientmanagementsystem-b0bd6.firebaseio.com",
    storageBucket: "clientmanagementsystem-b0bd6.appspot.com",
    messagingSenderId: "1050294127173"
}

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    MembersComponent,
    AddUserComponent,
    UsersComponent,
    NavbarComponent,
    ClientDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, AngularFireAuth, FirebaseService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
