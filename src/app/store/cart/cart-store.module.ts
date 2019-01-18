import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { cartReducer } from './cart.reducer';
import { CartEffects } from './cart.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('cartState', cartReducer ),
    EffectsModule.forFeature([ CartEffects ]),
  ]
})
export class CartStoreModule {
}
