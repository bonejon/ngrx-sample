import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { CommonService } from '../../common/services/common.service';
import { PersonTitle } from '../../common/models/persontitle';

import * as commonActions from './common.actions';
import { CommonEffects } from './common.effects';
import { commonReducer } from './common.reducer';
import { CommonState, initialCommonState } from './common.state';

describe('NGRX: common state', () => {
  describe('reducers', () => {
    it('Should not alter the state with an unknown action', () => {
      const initialState: CommonState = initialCommonState;

      const newState: CommonState = commonReducer(initialState, new commonActions.GetPersonTitlesAction());

      expect(newState).toEqual(initialCommonState);
    });

    it('Should not alter the state with an unknown action', () => {
      const initialState: CommonState = initialCommonState;

      const expectedTitles: Array<PersonTitle> = [
        new PersonTitle('Mr', 1),
        new PersonTitle('Mrs', 2),
        new PersonTitle('Miss', 3)
      ];

      const newState: CommonState = commonReducer(initialState, new commonActions.GetPersonTitlesSuccessAction(expectedTitles));

      expect(newState).not.toBe(initialState);
      expect(newState.titles).toBe(expectedTitles);
    });
  });

  describe('actions', () => {
    it('should have correct type for GetTitlesAction', () => {
      const action = new commonActions.GetPersonTitlesAction();
      expect(action.type).toBe(commonActions.GET_PERSON_TITLE_ACTION);
    });

    it('should have correct type for GetTitlesSuccessAction', () => {
      const action = new commonActions.GetPersonTitlesSuccessAction([]);
      expect(action.type).toBe(commonActions.GET_PERSON_TITLE_ACTION_SUCCESS);
    });
  });

  describe('effects', () => {
    fit('GetPersonTitleAction should be called when state is empty', () => {
      const expectedTitles: Array<PersonTitle> = [
        new PersonTitle('Mr', 1),
        new PersonTitle('Mrs', 2),
        new PersonTitle('Miss', 3)
      ];

      const emptyStoreSpy = jasmine.createSpyObj('emptyStoreSpy', [
        'dispatch', 'subscribe'
      ]) as Store<CommonState>;

      emptyStoreSpy.select = () => of([]);

      const commonServiceSpy = {
        getTitles: jasmine.createSpy('getTitles').and.returnValue(of(expectedTitles))
      } as CommonService;

      const source = cold('a', { a: new commonActions.GetPersonTitlesAction() });

      const effects = new CommonEffects(commonServiceSpy, emptyStoreSpy, source);

      const expected = cold('b', { b: new commonActions.GetPersonTitlesSuccessAction(expectedTitles) });

      expect(effects.loadPersonTitles$).toBeDefined();
      expect(effects.loadPersonTitles$).toBeObservable(expected);
      expect(commonServiceSpy.getTitles).toHaveBeenCalledTimes(1);
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

      const expected = cold('');

      expect(effects.loadPersonTitles$).toBeDefined();
      expect(effects.loadPersonTitles$).toBeObservable(expected);

      expect(commonService.getTitles).toHaveBeenCalledTimes(0);
    });
  });
});
