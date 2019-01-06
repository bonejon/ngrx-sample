import * as cartActions from './cart.actions';
import { CartState, InitialCartState } from './cart.state';
import { CartItem } from 'src/app/common/models/cart-item';

export function cartReducer(state: CartState = InitialCartState, action: cartActions.Actions) {
    switch (action.type) {
        case cartActions.ADD_ITEM_TO_CART_ACTION_SUCCESS:
            const newItems: Array<CartItem> = [...state.items, action.payload];
            return {...state, items: newItems}

        case cartActions.REMOVE_ITEM_FROM_CART_ACTION_SUCCESS:
            const removeItems: Array<CartItem> = state.items.filter(i => i.id !== action.payload);
            return {...state, items: removeItems };

        case cartActions.CLEAR_CART_ACTION_SUCCESS:
            return {...state, items: [] };
            
        default:
            return state;
    }
}