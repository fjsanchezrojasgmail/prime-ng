import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';








@NgModule({
    declarations: [
        ProductsComponent,
        BasicsPageComponent,
        NumbersPageComponent,
        UncommonPageComponent,
        TranslatePipe
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        PrimeNgModule,

    ],
    providers: [
     TranslationService
    ]
})
export class ProductsModule { }
