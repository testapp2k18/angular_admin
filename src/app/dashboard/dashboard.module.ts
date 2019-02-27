import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';

import { DashboardComponent } from './dashboard.component';

import { UsersModule } from './users/users.module';
import { UsersEditModule } from './users-edit/users-edit.module';

import { MyprofileModule } from './myprofile/myprofile.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { TopNavComponent } from '../shared/index';
import { SidebarComponent } from '../shared/index';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      RouterModule,
      Ng2BootstrapModule.forRoot(),
      HomeModule,
      ChangePasswordModule,
      UsersModule,
      UsersEditModule,
      MyprofileModule,
      PipesModule
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
