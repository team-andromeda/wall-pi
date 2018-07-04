import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'callback', component: CallbackComponent},
  { path: 'configPage', component: ConfigComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
