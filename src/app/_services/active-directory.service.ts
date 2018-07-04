import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthOptions } from '../_models/auth-options.model';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const jwtKeyId = 'jwt';

@Injectable({
  providedIn: 'root',
})
export class ActiveDirectoryService {
  // TODO(egeldenhuys): Implement nonce and state params for security
  authOptions: AuthOptions = {
    url: 'https://login.microsoftonline.com/bbd.co.za/oauth2/v2.0/authorize',
    client_id: '476ba8bc-a7e1-4c89-ab55-c9f4c147e5e4',
    response_type: 'id_token+token',
    redirect_uri: 'http://127.0.0.1:4200/callback',
    scope:
      'openid ' +
      'https://graph.microsoft.com/Calendars.Read ' +
      'https://graph.microsoft.com/User.Read ' +
      'https://graph.microsoft.com/Calendars.Read.Shared',
    response_mode: 'fragment',
    nonce: 'TODO',
    state: 'TODO',
  };

  constructor(private httpClient: HttpClient, private router: Router) {}
  /**
   * Redirect the browser to Microsoft for authentication
   */
  authenticateRedirect() {
    console.warn('Redirecting to external site for authentication...');

    // NOTE: an automated solution can be to redirect the window when the token has expired.
    // Perhaps MS will serve us a new one automatically
    window.location.href = this.buildRequestUrl(this.authOptions);
  }

  // TODO(egeldenhuys): Is there a logout api endpoint?
  logout() {
    localStorage.removeItem(jwtKeyId);
    this.router.navigate(['login']);
  }

  buildRequestUrl(options: AuthOptions): string {
    return (
      options.url +
      '?client_id=' +
      options.client_id +
      '&response_type=' +
      options.response_type +
      '&redirect_uri=' +
      encodeURI(options.redirect_uri) +
      '&scope=' +
      encodeURI(options.scope) +
      '&response_mode=' +
      options.response_mode +
      '&nonce=' +
      options.nonce +
      '&state=' +
      options.state
    );
  }

  getMe() {
    this.httpClient
      .get('https://graph.microsoft.com/v1.0/me')
      .subscribe((res) => {
        console.log(res);
      });
  }

  getCalendar(user: string) {
    return this.httpClient.get(
      'https://graph.microsoft.com/v1.0/users/' + user + '@bbd.co.za/calendar/events'
    );
  }

  isLoggedIn(): boolean {
    const jwtRaw = window.localStorage.getItem(jwtKeyId);
    const helper = new JwtHelperService();

    if (jwtRaw === null) {
      console.error('No JWT found.');
      // this.router.navigate(['login']);
      // this.activeDirService.authenticateRedirect();

      return false;
    } else {
      if (helper.isTokenExpired(jwtRaw)) {
        console.error('JWT has expired.');

        localStorage.removeItem(jwtKeyId);
        // this.router.navigate(['login']);
        // this.activeDirService.authenticateRedirect();
        return false;
      } else {
        return true;
      }
    }
  }
}
