import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Login/Login.component';
import { RegisterComponent } from './components/Register/Register.component'
import { MenuPComponent} from './components/MenuP/MenuPcomponent';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login',
    component: LoginComponent,
  },
  {
  path: 'register',
  component: RegisterComponent
  },
  {
    path: 'menu',
    component: MenuPComponent, ...canActivate(()=> redirectUnauthorizedTo(['/register']))
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
