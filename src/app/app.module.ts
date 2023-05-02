import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LoginComponent} from './Login/Login.component'
import { RegisterComponent } from './Register/Register.component';
import { passwordComponent } from './New-password/password.component';




@NgModule({
declarations: [
AppComponent,
LoginComponent,
RegisterComponent,
passwordComponent,
],
imports: [
BrowserModule,
AppRoutingModule

],

providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }



