import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

//import { AppService } from '../app.service';

@NgModule({
    imports: [
        CommonModule,
         RouterModule,
          FormsModule,
           ReactiveFormsModule
        ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [],
})

export class LoginModule { }
