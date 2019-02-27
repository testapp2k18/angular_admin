import { Route } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { UsersRoutes } from './users/users.routes';
import { MyprofileRoutes } from './myprofile/myprofile.routes';
import { ChangePasswordRoutes } from './change-password/change-password.routes';
import { DashboardComponent } from './index';
import { AuthGuardService } from "../auth/auth-guard.service";

export const DashboardRoutes: Route[] = [
    {
      path: 'dashboard',
      canActivate:[AuthGuardService],
      component: DashboardComponent,
      children: [
        ...HomeRoutes,
        ...ChangePasswordRoutes,
        ...UsersRoutes,
        ...MyprofileRoutes,
      ]
    }
];
