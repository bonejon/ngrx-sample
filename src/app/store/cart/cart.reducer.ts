import * as cartActions from './cart.actions';
import { CartState, InitialCartState } from './cart.state';
import { CartItem } from 'src/app/common/models/cart-item';

export function cartReducer(state: CartState = InitialCartState, action: cartActions.Actions) {
    switch (action.type) {
        case cartActions.ADD_ITEM_TO_CART_ACTION_SUCCESS:
            const newItems: Array<CartItem> =[...state.items, action.payload];
            return {...state, items: newItems}

        default:
            return state;
    }
}