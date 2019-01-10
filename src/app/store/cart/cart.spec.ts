import { CartState, InitialCartState } from './cart.state';
import { CartItem } from 'src/app/common/models/cart-item';
import { AddItemToCartActionSuccess } from './cart.actions';
import { cartReducer } from './cart.reducer';
import * as cartActions from './cart.actions';
import { cold } from 'jasmine-marbles';
import { CartEffects } from './cart.effects';
import { TestColdObservable } from 'jasmine-marbles/src/test-observables';

describe('NGRX: cart state', () => {

  describe('actions', () => {
    it('should have correct type for AddItemToCartAction', () => {
      const action = new cartActions.AddItemToCartAction(new CartItem());
      expect(action.type).toBe(cartActions.ADD_ITEM_TO_CART_ACTION);
    });

    it('should have correct type for AddItemToCartActionSuccess', () => {
      const action = new cartActions.AddItemToCartActionSuccess(new CartItem());
      expect(action.type).toBe(cartActions.ADD_ITEM_TO_CART_ACTION_SUCCESS);
    });

    it('should have correct type for RemoveItemFromCartAction', () => {
      const action = new cartActions.RemoveItemFromCartAction(0);
      expect(action.type).toBe(cartActions.REMOVE_ITEM_FROM_CART_ACTION);
    });

    it('should have correct type for RemoveItemFromCartActionSuccess', () => {
      const action = new cartActions.RemoveItemFromCartActionSuccess(0);
      expect(action.type).toBe(cartActions.REMOVE_ITEM_FROM_CART_ACTION_SUCCESS);
    });

    it('should have correct type for ClearCartAction', () => {
      const action = new cartActions.ClearCartAction();
      expect(action.type).toBe(cartActions.CLEAR_CART_ACTION);
    });

    it('should have correct type for ClearCartActionSuccess', () => {
      const action = new cartActions.ClearCartActionSuccess();
      expect(action.type).toBe(cartActions.CLEAR_CART_ACTION_SUCCESS);
    });

    it('should have correct type for UpdateCartItemAction', () => {
      const action = new cartActions.UpdateCartItemAction(new cartActions.UpdateCartItemPayload(1, 2));
      expect(action.type).toBe(cartActions.UPDATE_CART_ITEM_ACTION);
    });

    it('should have correct type for UpdateCartItemActionSuccess', () => {
      const action = new cartActions.UpdateCartItemActionSuccess(new cartActions.UpdateCartItemPayload(1, 2));
      expect(action.type).toBe(cartActions.UPDATE_CART_ITEM_ACTION_SUCCESS);
    });
  });

  describe('reducers', () => {

    it('Should add an item to the cart state', () => {
      const initialState: CartState = InitialCartState;
      const newItem: CartItem = new CartItem();
      newItem.productId = 1;
      newItem.productName = 'Test';
      newItem.quantity = 1;
      newItem.unitPrice = 2;

      const action = new AddItemToCartActionSuccess(newItem);

      const newState: CartState = cartReducer(initialState, action);

      expect(newState).toBeDefined();
      expect(newState.items.length).toBe(1);
      expect(newState.items[0]).toBe(newItem);
    });

    it('Should update the correct item in the cart state', () => {
      const item1: CartItem = new CartItem();
      item1.productId = 1;
      item1.productName = 'One';
      item1.quantity = 1;
      item1.unitPrice = 1;

      const item2: CartItem = new CartItem();
      item2.productId = 2;
      item2.productName = 'Two';
      item2.quantity = 2;
      item2.unitPrice = 2;

      const initialState: CartState = {
        items: [ item1, item2, ]
      };

      const action = new cartActions.UpdateCartItemActionSuccess(new cartActions.UpdateCartItemPayload(item2.id, 10));

      const newState: CartState = cartReducer(initialState, action);

      expect(newState).toBeDefined();
      expect(newState).not.toBe(initialState);
      const updatedItem2: CartItem = newState.items.find(i => i.id === item2.id);
      expect(updatedItem2.quantity).toBe(10);
    });

    it('Should remove the correct item in the cart state', () => {
      const item1: CartItem = new CartItem();
      item1.productId = 1;
      item1.productName = 'One';
      item1.quantity = 1;
      item1.unitPrice = 1;

      const item2: CartItem = new CartItem();
      item2.productId = 2;
      item2.productName = 'Two';
      item2.quantity = 2;
      item2.unitPrice = 2;

      const initialState: CartState = {
        items: [ item1, item2, ]
      };

      const action = new cartActions.RemoveItemFromCartActionSuccess(item2.id);

      const newState: CartState = cartReducer(initialState, action);

      expect(newState).toBeDefined();
      expect(newState).not.toBe(initialState);
      expect(newState.items.length).toBe(1);
      const updatedItem2: CartItem = newState.items.find(i => i.id === item2.id);
      expect(updatedItem2).toBeUndefined();
    });

    it('Should clear the cart state', () => {
      const item1: CartItem = new CartItem();
      item1.productId = 1;
      item1.productName = 'One';
      item1.quantity = 1;
      item1.unitPrice = 1;

      const item2: CartItem = new CartItem();
      item2.productId = 2;
      item2.productName = 'Two';
      item2.quantity = 2;
      item2.unitPrice = 2;

      const initialState: CartState = {
        items: [ item1, item2, ]
      };

      const action = new cartActions.ClearCartActionSuccess();

      const newState: CartState = cartReducer(initialState, action);

      expect(newState).toBeDefined();
      expect(newState).not.toBe(initialState);
      expect(newState.items.length).toBe(0);
    });
  });

  describe('effects', () => {
    it('Should return the correct success action for AddItemToCart', () => {
      const payload: cartActions.AddItemToCartPayload = new cartActions.AddItemToCartPayload(1, 'Product1', 1, 2, 123);
      const addItemToCartAction: cartActions.AddItemToCartAction = new cartActions.AddItemToCartAction(payload);

      const result: CartItem = new CartItem(123);
      result.productId = 1;
      result.productName = 'Product1';
      result.quantity = 1;
      result.unitPrice = 2;

      const source: TestColdObservable = cold('a', { a: addItemToCartAction });
      const expected: TestColdObservable = cold('b', { b: new AddItemToCartActionSuccess(result) });

      const effects: CartEffects = new CartEffects(source);

      expect(effects.addItemToCartAction$).toBeDefined();
      expect(effects.addItemToCartAction$).toBeObservable(expected);
    });

    it('Should return the correct success action from RemoveItemFromCart', () => {
      const removeItemFromCartAction: cartActions.RemoveItemFromCartAction = new cartActions.RemoveItemFromCartAction(123);

      const source: TestColdObservable = cold('a', { a: removeItemFromCartAction });
      const expected: TestColdObservable = cold('b', { b: new cartActions.RemoveItemFromCartActionSuccess(123) });

      const effects: CartEffects = new CartEffects(source);

      expect(effects.removeItemFromCartAction$).toBeDefined();
      expect(effects.removeItemFromCartAction$).toBeObservable(expected);
    });

    it('Should return the correct success action from ClearCart', () => {
      const clearCartAction: cartActions.ClearCartAction = new cartActions.ClearCartAction();

      const source: TestColdObservable = cold('a', { a: clearCartAction });
      const expected: TestColdObservable = cold('b', { b: new cartActions.ClearCartActionSuccess() });

      const effects: CartEffects = new CartEffects(source);

      expect(effects.clearCartAction$).toBeDefined();
      expect(effects.clearCartAction$).toBeObservable(expected);
    });

    it('Should return the correct success action from UpdateCartItem', () => {
      const payload: cartActions.UpdateCartItemPayload = new cartActions.UpdateCartItemPayload(123, 45);
      const updateCartItemAction: cartActions.UpdateCartItemAction = new cartActions.UpdateCartItemAction(payload);

      const source: TestColdObservable = cold('a', { a: updateCartItemAction });
      const expected: TestColdObservable = cold('b', { b: new cartActions.UpdateCartItemActionSuccess(payload) });

      const effects: CartEffects = new CartEffects(source);

      expect(effects.updateCartItem$).toBeDefined();
      expect(effects.updateCartItem$).toBeObservable(expected);
    });
  });
});
