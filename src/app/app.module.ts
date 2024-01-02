import { LOCALE_ID, NgModule, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

//configuracion del locale de la app
import  localeEsES   from '@angular/common/locales/es-419';

import { registerLocaleData } from '@angular/common';




registerLocaleData( localeEsES );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,

    SharedModule

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-419'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
