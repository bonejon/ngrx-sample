import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartItem } from 'src/app/common/models/cart-item';

export interface CartState {
    items: Array<CartItem>;
}

export const InitialCartState: CartState = {
    items: []
}

export const cartStateSelector = createFeatureSelector<CartState>('cartState');
export const cartItemsSelector = createSelector(cartStateSelector, (state: CartState) => state.items);
