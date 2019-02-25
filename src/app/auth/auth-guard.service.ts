import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {

  	if(!this.auth.isAuthenticated()){
  		this.router.navigate(['login']);
  		return false;
  	}
  	return true;
  }

/*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let valid = this._appservice.isAuthenticated(); 
    if(!valid){
       this.router.navigate(['/']);
       return false;
    } else {
       return true;
    } 
  }*/
}
