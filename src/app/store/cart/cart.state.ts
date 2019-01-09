import { CartItem } from 'src/app/common/models/cart-item';

export interface CartState {
    items: Array<CartItem>;
}

export const InitialCartState: CartState = {
    items: []
};
