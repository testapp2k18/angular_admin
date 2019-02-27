import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { MyprofileComponent } from './myprofile.component';

//import { UserEditComponent } from '../user-edit/user-edit.component';

@NgModule({
    imports: [CommonModule,RouterModule,BrowserModule,FormsModule,GooglePlaceModule],
    declarations: [MyprofileComponent],
    exports: [MyprofileComponent]
})

export class MyprofileModule { }
