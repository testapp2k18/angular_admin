import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginModule } from './login/login.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppService } from "app/app.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuardService } from "./auth/auth-guard.service";
import { RoleGuardService } from "./auth/role-guard.service";
import { DatePipe } from '@angular/common'
import { EmailVerifyModule } from './email-verify/email-verify.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    LoginModule,
    ForgotPasswordModule,
    DashboardModule,
    EmailVerifyModule
  ],
  providers: [AppService, AuthService, AuthGuardService, RoleGuardService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
