import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';

import { LoginComponent } from './login/index';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { EmailVerifyComponent } from "./email-verify/email-verify.component";

export const routes: Routes = [
  ...LoginRoutes,
  ...DashboardRoutes,
  {
    path:'forgot_password',
    component: ForgotPasswordComponent
  },
  {
    path:'email_validate/:access_token',
    component: EmailVerifyComponent
  },
  { 
  	path: '**',
    component: LoginComponent
  }
  
];
