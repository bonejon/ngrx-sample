import * as commonActions from './common.actions';
import { initialCommonState, CommonState } from './common.state';

export function commonReducer(state: CommonState = initialCommonState, action: commonActions.Actions) {
  switch (action.type) {
    case commonActions.GET_PERSON_TITLE_ACTION_SUCCESS:
      return {...state, titles: action.payload};

    default:
      return state;
  }
}
