import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { commonReducer } from './common/common.reducer';
import { CommonEffects } from './common/common.effects';
import { environment } from 'src/environments/environment';
import { CommonGuard } from './common/common.guard';

@NgModule({
  imports: [
    StoreModule.forRoot({ commonState: commonReducer }),
    EffectsModule.forRoot([ CommonEffects ]),
    environment.dynamicImports
  ],
  providers: [
    CommonGuard
  ]
})
export class AppStoreModule {
}
