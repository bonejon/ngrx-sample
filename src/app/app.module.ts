import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { commonReducer } from './store/common.reducer';
import { CommonEffects } from './store/common.effects';
import { ProfileComponent } from './profile/profile.component';
import { CommonService } from './common/services/common.service';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './common/services/product.service';
import { cartReducer } from './store/cart/cart.reducer';
import { CartEffects } from './store/cart/cart.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule,
    StoreModule.forRoot({ commonState: commonReducer }),
    StoreModule.forFeature('cartState', cartReducer ),
    EffectsModule.forRoot([ CommonEffects ]),
    EffectsModule.forFeature([ CartEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 20 })
  ],
  providers: [
    CommonService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
