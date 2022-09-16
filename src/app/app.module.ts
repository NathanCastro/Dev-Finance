import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PoModalModule, PoModule, PoNavbarModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { InFinanceComponent } from './shared/in-finance/in-finance.component';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    InFinanceComponent,
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    BrowserAnimationsModule,
    PoNavbarModule,
    PoModalModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
