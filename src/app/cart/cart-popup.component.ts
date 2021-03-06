import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartState } from '../store/cart/cart.state';
import { CartItem } from '../common/models/cart-item';
import * as cartActions from '../store/cart/cart.actions';
import { cartItemsSelector } from '../store/cart/cart.selectors';

@Component({
    selector: 'app-cart-popup',
    templateUrl: './cart-popup.component.html'
})
export class CartPopupComponent {
    public displayedColumns: Array<string> = [ 'name', 'quantity', 'unitPrice', 'totalPrice', 'actions' ];
    public cartList$: Observable<Array<CartItem>>;

    constructor(private bottomSheetRef: MatBottomSheetRef<CartPopupComponent>,
                private cartStore$: Store<CartState>) {
      this.cartList$ = this.cartStore$.select(cartItemsSelector);
    }

    public removeFromCart(item: CartItem): void {
      this.cartStore$.dispatch(new cartActions.RemoveItemFromCartAction(item.id));
    }

    public clearCart(): void {
      this.cartStore$.dispatch(new cartActions.ClearCartAction());
      this.bottomSheetRef.dismiss();
    }

    public updateCartItem(item: CartItem): void {
      this.cartStore$.dispatch(new cartActions.UpdateCartItemAction(new cartActions.UpdateCartItemPayload(item.id, item.quantity)));
    }
}
