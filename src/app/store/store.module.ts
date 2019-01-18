import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { commonReducer } from './common.reducer';
import { CommonEffects } from './common.effects';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot({ commonState: commonReducer }),
    EffectsModule.forRoot([ CommonEffects ]),
    environment.dynamicImports
  ]
})
export class AppStoreModule {
}
