import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CommonState } from './common.state';

export const commonStateSelector = createFeatureSelector<CommonState>('commonState');
export const personTitlesSelector = createSelector(commonStateSelector, (state: CommonState) => state.titles);
