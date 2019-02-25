import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from "./app.service";

import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _appservice:AppService,private router:Router){
 
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let valid = this._appservice.isAuthenticated(); 
    if(!valid){
       this.router.navigate(['/']);
       return false;
    } else {
       return true;
    } 
  }
}
