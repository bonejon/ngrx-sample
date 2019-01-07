import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './common/services/common.service';
import { HomeComponent } from './home/home.component';
import { ProductService } from './common/services/product.service';
import { AppStoreModule } from './store/store.module';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule
  ],
  providers: [
    CommonService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
