import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableComponent } from './table.component';

@NgModule({
    imports: [RouterModule,BrowserModule],
    declarations: [TableComponent],
    exports: [TableComponent]
})

export class TableModule { }
