import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MatBottomSheet, MatSnackBar } from '@angular/material';
import { ProductService } from '../common/services/product.service';
import { CartState } from '../store/cart/cart.state';
import * as cartActions from '../store/cart/cart.actions';
import { CartItem } from '../common/models/cart-item';
import { ProductQuantity } from '../common/models/product-quantity';
import { CartPopupComponent } from '../cart/cart-popup.component';
import { cartItemsSelector } from '../store/cart/cart.selectors';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  private _cartTotalValue: number;

  public displayedColumns: Array<string> = [ 'name', 'price', 'available', 'quantity', 'actions' ];
  public productList$: Observable<Array<ProductQuantity>>;
  public cartItems$: Observable<Array<CartItem>>;

  constructor(private productService: ProductService,
              private cartStore: Store<CartState>,
              private bottomSheet: MatBottomSheet,
              private actions$: Actions,
              private snackBar: MatSnackBar) {
    this.cartItems$ = this.cartStore.select(cartItemsSelector);

    this.cartItems$.subscribe(i => {
      this._cartTotalValue = i.reduce(function(a: number, b: CartItem) {
        return a + b.totalPrice;
      }, 0);
    });

    this.actions$.pipe(
      ofType<cartActions.ClearCartAction>(cartActions.CLEAR_CART_ACTION),
      tap(() => {
        this.snackBar.open('Cart Cleared', '', {
          duration: 5000,
          politeness: 'polite'
        });
      })).subscribe();
  }

  public get cartTotal(): number {
    return this._cartTotalValue;
  }

  public ngOnInit(): void {
    this.productList$ = this.productService.getProducts().pipe(
      map((p) => p.map(i => new ProductQuantity(i)))
    );
  }

  public addToCart(product: ProductQuantity): void {
    const payload: cartActions.AddItemToCartPayload = new cartActions.AddItemToCartPayload(
      product.id,
      product.name,
      product.quantity,
      product.price);

    this.cartStore.dispatch(new cartActions.AddItemToCartAction(payload));

    product.quantity = 1;
  }

  public showCartPopup(): void {
    this.bottomSheet.open(CartPopupComponent);
  }
}
