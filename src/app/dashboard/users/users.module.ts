import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { UsersComponent } from './users.component';


//import { UserEditComponent } from '../user-edit/user-edit.component';

@NgModule({
    imports: [CommonModule,RouterModule,BrowserModule,FormsModule,Ng2SearchPipeModule,Ng2OrderModule,NgxPaginationModule ],
    declarations: [UsersComponent],
    exports: [UsersComponent],
    bootstrap: [UsersComponent]
})

export class UsersModule { }
