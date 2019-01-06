import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as cartActions from './cart.actions';
import { CartItem } from 'src/app/common/models/cart-item';
import { switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class CartEffects {
    constructor(private actions$: Actions) {
    }

    @Effect() addItemToCartAction$: Observable<Action> = this.actions$.pipe(
        ofType<cartActions.AddItemToCartAction>(cartActions.ADD_ITEM_TO_CART_ACTION),
        map(action => action.payload),
        switchMap((payload) => {
            const cartItem: CartItem = new CartItem();
            cartItem.productId = payload.productId;
            cartItem.productName = payload.productName;
            cartItem.quantity = payload.quantity;
            cartItem.unitPrice = payload.unitPrice;

            return of(new cartActions.AddItemToCartActionSuccess(cartItem));
        })
    )

    @Effect() removeItemFromCartAction$: Observable<Action> = this.actions$.pipe(
        ofType<cartActions.RemoveItemFromCartAction>(cartActions.REMOVE_ITEM_FROM_CART_ACTION),
        map(action => action.payload),
        switchMap((payload) => of(new cartActions.RemoveItemFromCartActionSuccess(payload)))
    )

    @Effect() clearCartAction$: Observable<Action> = this.actions$.pipe(
        ofType<cartActions.ClearCartAction>(cartActions.CLEAR_CART_ACTION),
        switchMap(() => of(new cartActions.ClearCartActionSuccess()))
    )
}