import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { canFlyPipe } from '../pipes/canfly.pipe';
import { colorPipe } from '../pipes/color.pipe';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SortByPipe } from './../pipes/sortBy.pipe';
import { toggleCasePipe } from '../pipes/toggle-case.pipe';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslationService } from '../services/translation.service';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';









@NgModule({
    declarations: [
        ProductsComponent,
        BasicsPageComponent,
        NumbersPageComponent,
        OrderComponent,
        UncommonPageComponent,
        TranslatePipe,
        toggleCasePipe,
        canFlyPipe,
        colorPipe,
        SortByPipe
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
