import { Action } from '@ngrx/store';
import { PersonTitle } from '../common/models/persontitle';

export const GET_PERSON_TITLE_ACTION = 'GET_PERSON_TITLE_ACTION';
export const GET_PERSON_TITLE_ACTION_SUCCESS = 'GET_PERSON_TITLE_ACTION_SUCCESS';

export class GetPersonTitlesAction implements Action {
    readonly type = GET_PERSON_TITLE_ACTION;
    constructor() {
    }
}

export class GetPersonTitlesSuccessAction implements Action {
    readonly type = GET_PERSON_TITLE_ACTION_SUCCESS;

    constructor(public payload: Array<PersonTitle>) {
    }
}

export type Action
    = GetPersonTitlesAction
    | GetPersonTitlesSuccessAction;
