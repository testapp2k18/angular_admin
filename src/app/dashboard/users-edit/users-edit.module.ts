import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { UsersEditComponent } from './users-edit.component';
import { FileUploadModule } from "ng2-file-upload/file-upload/file-upload.module";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        GooglePlaceModule,
        FileUploadModule
    ],
    exports: [UsersEditComponent],
    declarations: [UsersEditComponent],
    providers: [],
})
export class UsersEditModule { }
