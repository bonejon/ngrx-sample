import { PersonTitle } from '../common/models/persontitle';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface CommonState {
    titles: Array<PersonTitle>;
}

export const initialCommonState: CommonState = {
    titles: []
};

export const commonStateSelector = createFeatureSelector<CommonState>('commonState');
export const personTitlesSelector = createSelector(commonStateSelector, (state: CommonState) => state.titles);
