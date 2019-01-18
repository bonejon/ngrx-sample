import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, withLatestFrom, filter } from 'rxjs/operators';
import * as commonActions from './common.actions';
import { CommonService } from '../../common/services/common.service';
import { CommonState } from './common.state';
import { personTitlesSelector } from './common.selectors';

@Injectable()
export class CommonEffects {
    constructor(
      private commonService: CommonService,
      private store$: Store<CommonState>,
      private actions$: Actions) {
    }

    @Effect() loadPersonTitles$ = this.actions$.pipe(
      ofType(commonActions.GET_PERSON_TITLE_ACTION),
        withLatestFrom(this.store$.select(personTitlesSelector),
          (action: any, state: any) => {
            if (state && state.length > 0) {
              return undefined;
            } else {
              return action;
            }
          }
        ),
        filter((action) => !!action),
        switchMap(() => this.commonService.getTitles().pipe(
          map((titles) => new commonActions.GetPersonTitlesSuccessAction(titles))
        )
      )
    );
}
