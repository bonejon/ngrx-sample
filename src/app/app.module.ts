import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatSelectModule,
    StoreModule.forRoot({ commonState: commonReducer }),
    EffectsModule.forRoot([ CommonEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 20 })
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
