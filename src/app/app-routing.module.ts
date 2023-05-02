import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { passwordComponent } from './New-password/password.component';
import { RegisterComponent } from './Register/Register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: 'register',
  component: RegisterComponent
  },
  {
  path: 'newpassword',
  component: passwordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
