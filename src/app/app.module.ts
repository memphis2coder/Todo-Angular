import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore'; // For Cloud Firestore
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment'; // Config

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';

import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';


// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    MenuComponent,
    ContactComponent,
  ],
  entryComponents: [TodoFormComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Import firebase
    AngularFirestoreModule, // Import firestore
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
