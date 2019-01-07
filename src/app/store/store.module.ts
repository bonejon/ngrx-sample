import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { commonReducer } from './common.reducer';
import { cartReducer } from './cart/cart.reducer';
import { CommonEffects } from './common.effects';
import { CartEffects } from './cart/cart.effects';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot({ commonState: commonReducer }),
    StoreModule.forFeature('cartState', cartReducer ),
    EffectsModule.forRoot([ CommonEffects ]),
    EffectsModule.forFeature([ CartEffects ]),
    environment.dynamicImports
  ]
})
export class AppStoreModule {
}
