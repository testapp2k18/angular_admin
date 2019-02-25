import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ForgotPasswordComponent } from './forgot-password.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [ForgotPasswordComponent],
    providers: [],
})
export class ForgotPasswordModule { }
