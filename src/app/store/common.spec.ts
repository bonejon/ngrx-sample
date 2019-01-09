import { cold } from 'jasmine-marbles';
import * as commonActions from './common.actions';
import { CommonEffects } from './common.effects';
import { CommonService } from '../common/services/common.service';
import { Store, StoreModule } from '@ngrx/store';
import { configureTestSuite } from 'ng-bullet';
import { TestBed } from '@angular/core/testing';
import { CommonState, initialCommonState } from './common.state';
import { PersonTitle } from '../common/models/persontitle';
import { commonReducer } from './common.reducer';
import { Observable, of } from 'rxjs';

describe('NGRX: common state', () => {
  describe('actions', () => {
    configureTestSuite(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({ commonState: commonReducer }),
        ],
        providers: [ CommonService ]
      });
    });

    it('GetPersonTitleAction should be called when state is empty', () => {
      const emptyStoreSpy = jasmine.createSpyObj('emptyStoreSpy', [
        'dispatch', 'subscribe'
      ]) as Store<CommonState>;

      emptyStoreSpy.select = () => of([]);

      const expectedTitles: Array<PersonTitle> = [
        new PersonTitle('Mr', 1),
        new PersonTitle('Mrs', 2),
        new PersonTitle('Miss', 3)
      ];

      const source = cold('a', { a: new commonActions.GetPersonTitlesAction() });

      const commonService: CommonService = new CommonService();
      spyOn(commonService, 'getTitles').and.callThrough();

      const effects = new CommonEffects(commonService, emptyStoreSpy, source);

      const expected = cold('b', { b: new commonActions.GetPersonTitlesSuccessAction(expectedTitles) });

      expect(effects.loadPersonTitles$).toBeDefined();
      expect(effects.loadPersonTitles$).toBeObservable(expected);
      expect(commonService.getTitles).toHaveBeenCalledTimes(1);
    });

    it('GetPersonTitleAction should not be called if the state is pouplated.', () => {
      const expectedTitles: Array<PersonTitle> = [
        new PersonTitle('Mr', 1),
        new PersonTitle('Mrs', 2),
        new PersonTitle('Miss', 3)
      ];

      const populatedStoreSpy = jasmine.createSpyObj('populatedStoreSpy', [
        'dispatch', 'subscribe'
      ]) as Store<CommonState>;

      populatedStoreSpy.select = () => of(expectedTitles);

      const commonService: CommonService = new CommonService();
      spyOn(commonService, 'getTitles').and.callThrough();

      const source = cold('a', { a: new commonActions.GetPersonTitlesAction() });
      const effects = new CommonEffects(commonService, populatedStoreSpy, source);

      expect(effects.loadPersonTitles$).toBeDefined();

      expect(commonService.getTitles).toHaveBeenCalledTimes(0);
    });
  });
});
