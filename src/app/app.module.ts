import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/Login/Login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/Register/Register.component';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from 'angularfire2';
import { MenuPComponent } from './components/MenuP/MenuPcomponent';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';










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
provideFirestore(() => getFirestore()),


],

providers: [AngularFireModule],
bootstrap: [AppComponent]
})
export class AppModule { }



