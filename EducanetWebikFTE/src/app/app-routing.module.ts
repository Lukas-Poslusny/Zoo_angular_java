import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './pages/post-list/post-list.component';
import {UserComponent} from './pages/user/user.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: 'posts', component: PostListComponent },
  {path: 'users', component: UserComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
