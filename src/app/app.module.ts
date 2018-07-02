import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveDirectoryService } from './active-directory.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { CallbackComponent } from './callback/callback.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [AppComponent, HomeComponent, CallbackComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'graph.microsoft.com'],
      },
    }),
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ActiveDirectoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
