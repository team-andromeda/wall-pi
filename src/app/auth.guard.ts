import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActiveDirectoryService } from './active-directory.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

const jwtKeyId = 'jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private activeDirService: ActiveDirectoryService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Source: https://github.com/TripleParity/docks-ui
    if (this.activeDirService.isLoggedIn()) {
      if (next.url.length !== 0 && next.url[0].path === 'login') {
        this.router.navigate(['home']);
        return false;
      } else {
        return true;
      }
    } else {
      if (next.url.length !== 0 && next.url[0].path === 'login') {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }
  }
}
