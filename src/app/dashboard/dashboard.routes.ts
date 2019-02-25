import { Route } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
//import { UserRoutes } from './user/user.routes';
//import { AgenciesRoutes } from './agencies/agencies.routes';
import { MyprofileRoutes } from './myprofile/myprofile.routes';
import { ChangePasswordRoutes } from './change-password/change-password.routes';
//import { AgencyRoutes } from './agency/agency.routes';
//import { LpnRoutes } from './lpn/lpn.routes';
//import { RnRoutes } from './rn/rn.routes';
//import { CgRoutes } from './cg/cg.routes';
//import { ClientRoutes } from './client/client.routes';
//import { AgencyListRoutes } from './agency-list/agency-list.routes';
//import { ClientRelationEditRoutes } from './client-relation-edit/client-relation-edit.routes';
import { DashboardComponent } from './index';
import { AuthGuardService } from "../auth/auth-guard.service";

/*import { UserRoutes } from './user/user.routes';*/
/*import { StoreRoutes } from './store/store.routes';*/

export const DashboardRoutes: Route[] = [
    {
      path: 'dashboard',
      canActivate:[AuthGuardService],
      component: DashboardComponent,
      children: [
        ...HomeRoutes,
        ...ChangePasswordRoutes,
        //...AgencyRoutes,
        //...LpnRoutes,
        //...RnRoutes,
        //...CgRoutes,
        //...ClientRoutes,
        //...ClientRelationEditRoutes,
        ...MyprofileRoutes,
        //...AgencyListRoutes

        /*
        ...UserRoutes,
        ...StoreRoutes,*/
        
      ]
    }
];
