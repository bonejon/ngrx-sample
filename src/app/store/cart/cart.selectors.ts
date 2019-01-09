import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const cartStateSelector = createFeatureSelector<CartState>('cartState');
export const cartItemsSelector = createSelector(cartStateSelector, (state: CartState) => state.items);
