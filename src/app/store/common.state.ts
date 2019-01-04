import { PersonTitle } from '../common/models/persontitle';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface commonState {
    titles: Array<PersonTitle>
};

export const initialCommonState: commonState = {
    titles: []
}

export const commonStateSelector = createFeatureSelector<commonState>('commonState');
export const personTitlesSelector = createSelector(commonStateSelector, (state: commonState) => state.titles);
