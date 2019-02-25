import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';

import { DashboardComponent } from './dashboard.component';
//import { UserModule } from './user/user.module';
//import { UserEditModule } from './user-edit/user-edit.module';
//import { AgenciesModule } from './agencies/agencies.module';
//import { AgenciesEditModule } from './agencies-edit/agencies-edit.module';
import { MyprofileModule } from './myprofile/myprofile.module';
import { ChangePasswordModule } from './change-password/change-password.module';
//import { AgencyModule } from './agency/agency.module';
//import { AgencyEditModule } from './agency-edit/agency-edit.module';
//import { AgencyViewModule } from './agency-view/agency-view.module';
//import { SvlFolderModule } from './svl-folder/svl-folder.module';
//import { AgencyListModule } from './agency-list/agency-list.module';
//import { LpnModule } from './lpn/lpn.module';
//import { LpnEditModule } from './lpn-edit/lpn-edit.module';
//import { RnModule } from './rn/rn.module';
//import { RnEditModule } from './rn-edit/rn-edit.module';
//import { RnListModule } from './rn-list/rn-list.module';
//import { LpnListModule } from './lpn-list/lpn-list.module';
//import { DclListModule } from './dcl-list/dcl-list.module';
//import { DclDetailsModule } from './dcl-details/dcl-details.module';
//import { DclPdfModule } from './dcl-pdf/dcl-pdf.module';
//import { SvlListModule } from './svl-list/svl-list.module';
//import { SvlDetailsModule } from './svl-details/svl-details.module';
//import { CgModule } from './cg/cg.module';
//import { CgEditModule } from './cg-edit/cg-edit.module';
//import { CgListModule } from './cg-list/cg-list.module';
//import { ClientModule } from './client/client.module';
//import { ClientListModule } from './client-list/client-list.module';
//import { ClientEditModule } from './client-edit/client-edit.module';
//import { ClientRelationEditModule } from './client-relation-edit/client-relation-edit.module';
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
      //AgencyModule,
      //AgencyEditModule,
      MyprofileModule,
      //LpnModule,
      //LpnEditModule,
      //RnModule,
      //RnEditModule,
      //CgModule,
      //CgEditModule,
      //ClientModule,
      //ClientEditModule,
      //ClientRelationEditModule,
      //AgencyListModule,
      //AgencyViewModule,
      //ClientListModule,
      //CgListModule,
      //RnListModule,
      //LpnListModule,
      //DclListModule,
      //DclDetailsModule,
      //DclPdfModule,
      //SvlFolderModule,
      //SvlListModule,
      //SvlDetailsModule,
      PipesModule
      //AgenciesModule,
    // AgenciesEditModule,

      //UserModule,
      //UserEditModule, 
     
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
