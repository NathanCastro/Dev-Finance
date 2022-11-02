import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PoLoadingModule, PoModalModule, PoModule, PoNavbarModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';
import { ContentComponent } from './shared/content/content.component';
import { HeaderComponent } from './shared/header/header.component';
import { InFinanceComponent } from './shared/in-finance/in-finance.component';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    InFinanceComponent,
    HeaderComponent,
    ModalComponent,
    ContentComponent
  ],
  imports: [
    PoLoadingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    PoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PoNavbarModule,
    PoModalModule,
    RouterModule.forRoot([])
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
