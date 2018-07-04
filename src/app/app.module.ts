import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActiveDirectoryService } from './_services/active-directory.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { CallbackComponent } from './callback/callback.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfigComponent } from './config/config.component';
import { RefreshComponent } from './refresh/refresh.component';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [AppComponent, HomeComponent, CallbackComponent, LoginComponent, ConfigComponent, RefreshComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
