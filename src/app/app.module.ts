import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/Login/Login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/Register/Register.component';
import { environment } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MenuPComponent } from './components/MenuP/MenuPcomponent';










@NgModule({
declarations: [
AppComponent,
LoginComponent,
RegisterComponent,
MenuPComponent,

],

imports: [
BrowserModule,
AppRoutingModule,
ReactiveFormsModule,
provideFirebaseApp(() => initializeApp(environment.firebase)),
provideAuth(() => getAuth()),
provideFirebaseApp(() => initializeApp(environment.firebase)),
provideFirestore(() => getFirestore())


],

providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }



