import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../common/models/product';
import { CartState, cartItemsSelector } from '../store/cart/cart.state';
import { Store } from '@ngrx/store';
import * as cartActions from '../store/cart/cart.actions';
import { CartItem } from '../common/models/cart-item';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    public displayedColumns: Array<string> = [ 'name', 'price', 'available', 'actions' ];
    public productList$: Observable<Array<Product>>;
    public cartItems$: Observable<Array<CartItem>>;

    constructor(private productService: ProductService,
                private cartStore: Store<CartState>) {
        this.cartItems$ = this.cartStore.select(cartItemsSelector);
    }

    public ngOnInit(): void {
        this.productList$ = this.productService.getProducts();
    }

    public addToCart(product: Product): void {
        const payload: cartActions.AddItemToCartPayload = new cartActions.AddItemToCartPayload();
        payload.productId = product.id;
        payload.productName = product.name;
        payload.quantity = 1;
        payload.unitPrice = product.price;

        this.cartStore.dispatch(new cartActions.AddItemToCartAction(payload));
    }
}