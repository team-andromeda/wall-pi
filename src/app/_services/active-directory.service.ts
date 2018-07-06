import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthOptions } from '../_models/auth-options.model';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { Config } from '../_models/config.model';

const jwtKeyId = 'jwt';

@Injectable({
  providedIn: 'root',
})
export class ActiveDirectoryService {
  config: Config = null;

  // TODO(egeldenhuys): Implement nonce and state params for security
  authOptions: AuthOptions = {
    url: 'DEPRECATED',
    client_id: 'DEPRECATED',
    response_type: 'id_token+token',
    redirect_uri: 'DEPRECATED',
    scope:
      'openid ' +
      'https://graph.microsoft.com/Calendars.Read ' +
      'https://graph.microsoft.com/User.Read ' +
      'https://graph.microsoft.com/Calendars.Read.Shared',
    response_mode: 'fragment',
    nonce: 'TODO',
    state: 'TODO',
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private configService: ConfigService
  ) {
    this.config = this.configService.getConfig();
  }
  /**
   * Redirect the browser to Microsoft for authentication
   */
  authenticateRedirect() {
    if (this.config === null) {
      // This could be after a refresh
      this.config = this.configService.getConfig();
      if (this.config === null) {
        console.error(
          'Not redirecting as config has not been set. Waiting for auto refresh'
        );
        return;
      }
    }

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
      this.config.authOptions.url +
      '?client_id=' +
      this.config.authOptions.client_id +
      '&response_type=' +
      options.response_type +
      '&redirect_uri=' +
      encodeURI(this.config.authOptions.redirect_uri) +
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

  formatDate(dateObj: Date): string {
    const dd = dateObj.getDate();
    const mm = dateObj.getMonth() + 1;
    const yyyy = dateObj.getFullYear();

    let ddStr = dd.toString();
    if (dd < 10) {
      ddStr = '0' + ddStr;
    }

    let mmStr = mm.toString();
    if (mm < 10) {
      mmStr = '0' + mmStr;
    }

    const yyyyStr = yyyy.toString();

    return yyyyStr + '-' + mmStr + '-' + ddStr;
  }

  getCalendar(user: string) {
    console.log('fetching data for calendar id ' + user);
    // Source: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

    const today = new Date();
    const futureDate = new Date(today.getTime() + 1000 * 60 * 60 * 24); // + 1 day in ms

    const todayStr = this.formatDate(today);
    const futureDateStr = this.formatDate(futureDate);

    // TODO:...

    /* tslint:disable */
    return this.httpClient.get(
      'https://graph.microsoft.com/v1.0/users/' +
        user +
        "@bbd.co.za/calendar/events?$filter=start/dateTime ge '" +
        todayStr +
        "T00:00' and start/dateTime le '" +
        futureDateStr +
        "T00:00'"
    );
  }
  /* tslint:enable */

  isLoggedIn(): boolean {
    const jwtRaw = window.localStorage.getItem(jwtKeyId);
    const helper = new JwtHelperService();

    if (jwtRaw === null) {
      console.error('No JWT found.');
      // this.router.navigate(['login']);
      // this.activeDirService.authenticateRedirect();

      return false;
    } else {
      try {
        helper.decodeToken(jwtRaw);
      } catch (err) {
        console.error('Invalid JWT');
        localStorage.clearItem(jwtKeyId);
        return false; // Still causes error somewhere.
      }
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
