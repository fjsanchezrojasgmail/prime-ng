import { CountryTableComponent } from './../../../../04-country-app/src/app/countries/components/country-table/country-table.component';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel'
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';







@NgModule({

  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenuModule,
    MenubarModule,
    PanelModule,
    ToolbarModule,
    TableModule


  ]

})
export class PrimeNgModule { }
