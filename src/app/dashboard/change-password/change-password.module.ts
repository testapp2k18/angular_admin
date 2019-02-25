import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './change-password.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [ChangePasswordComponent],
    providers: [],
})
export class ChangePasswordModule { }
