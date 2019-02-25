import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
*  This class represents the lazy loaded DashboardComponent.
*/

@Component({
  selector: 'app-dashboard-cmp',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent { 

  constructor(public router:Router){
    let token = sessionStorage.getItem("accessToken");
	
    if(!token){
      this.router.navigate(['/']);
    }
  }
}
