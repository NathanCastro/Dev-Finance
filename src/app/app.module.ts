import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PoModule, PoNavbarModule } from '@po-ui/ng-components';

import { InFinanceComponent } from '../shared/in-finance/in-finance.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InFinanceComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    BrowserAnimationsModule,
    PoNavbarModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
