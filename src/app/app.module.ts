import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
