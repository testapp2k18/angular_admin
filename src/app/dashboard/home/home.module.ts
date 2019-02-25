import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';


@NgModule({
    imports: [CommonModule,RouterModule, Ng2BootstrapModule.forRoot()],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
