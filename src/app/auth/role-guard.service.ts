import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RoleGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate():boolean {

  	if(!this.auth.isAdmin()){
  		
  		this.router.navigate(['dashboard/home']);
  		return false;
  	}

  	return true;
  }

}
