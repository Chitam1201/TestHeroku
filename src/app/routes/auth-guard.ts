import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private AuthService: AuthService,
    private router: Router){

    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.AuthService.isAuthenticates()
      .then((authenticated: boolean)=>{
        console.log('Authenticated');
        if (authenticated){
          return true;
        }

        this.router.navigate(['/']);

        return false;

      })
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}
