import {Injectable, inject} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
class AuthGuardPermission {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> | UrlTree {

    const path = route.routeConfig?.path;

    const isLogged = this.authService.isAuthenticated();

    if (path?.startsWith('pages') && isLogged) {
      return true;
    } else if (path?.startsWith('pages') && !isLogged) {
      this.router.navigateByUrl('/auth/login').then();
      return false;
    } else if (path?.startsWith('auth') && isLogged) {
      this.router.navigateByUrl('/pages/digimons').then();
      return false;
    } else {
      return path!.startsWith('auth') && !isLogged;
    }
  }


}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuardPermission).canActivate(next, state);
}
