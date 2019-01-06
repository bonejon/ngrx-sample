import { Action } from '@ngrx/store';
import { CartItem } from 'src/app/common/models/cart-item';

export const ADD_ITEM_TO_CART_ACTION = 'ADD_ITEM_TO_CART_ACTION';
export const ADD_ITEM_TO_CART_ACTION_SUCCESS = 'ADD_ITEM_TO_CART_ACTION_SUCCESS';

export const REMOVE_ITEM_FROM_CART_ACTION = 'REMOVE_ITEM_FROM_CART_ACTION';
export const REMOVE_ITEM_FROM_CART_ACTION_SUCCESS = 'REMOVE_ITEM_FROM_CART_ACTION_SUCCESS';

export const UPDATE_CART_ITEM_ACTION = 'UPDATE_CART_ITEM_ACTION';
export const UPDATE_CART_ITEM_ACTION_SUCCESS = 'UPDATE_CART_ITEM_ACTION_SUCCESS';

export const CLEAR_CART_ACTION = 'CLEAR_CART_ACTION';
export const CLEAR_CART_ACTION_SUCCESS = 'CLEAR_CART_ACTION_SUCCESS';

export class AddItemToCartPayload {
  constructor(
    public productId: number,
    public productName: string,
    public quantity: number,
    public unitPrice: number) {
  }
}

export class UpdateCartItemPayload {
  constructor(
    public cartId: number,
    public quantity: number) {
  }
}

export class AddItemToCartAction implements Action {
    readonly type = ADD_ITEM_TO_CART_ACTION;
    constructor(public payload: AddItemToCartPayload) {
    }
}

export class AddItemToCartActionSuccess implements Action {
    readonly type = ADD_ITEM_TO_CART_ACTION_SUCCESS;
    constructor(public payload: CartItem) {
    }
}

export class RemoveItemFromCartAction implements Action {
    readonly type = REMOVE_ITEM_FROM_CART_ACTION;
    constructor(public payload: number) {
    }
}

export class RemoveItemFromCartActionSuccess implements Action {
    readonly type = REMOVE_ITEM_FROM_CART_ACTION_SUCCESS;
    constructor(public payload: number) {
    }
}

export class UpdateCartItemAction implements Action {
  readonly type = UPDATE_CART_ITEM_ACTION;
  constructor(public payload: UpdateCartItemPayload) {
  }
}

export class UpdateCartItemActionSuccess implements Action {
  readonly type = UPDATE_CART_ITEM_ACTION_SUCCESS;
  constructor(public payload: UpdateCartItemPayload) {
  }
}

export class ClearCartAction implements Action {
    readonly type = CLEAR_CART_ACTION;
    constructor() {
    }
}

export class ClearCartActionSuccess implements Action {
    readonly type = CLEAR_CART_ACTION_SUCCESS;
    constructor() {
    }
}

export type Actions
    = AddItemToCartAction
    | AddItemToCartActionSuccess
    | RemoveItemFromCartAction
    | RemoveItemFromCartActionSuccess
    | UpdateCartItemAction
    | UpdateCartItemActionSuccess
    | ClearCartAction
    | ClearCartActionSuccess;
