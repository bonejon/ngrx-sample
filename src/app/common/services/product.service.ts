import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

export class ProductService {
    public getProducts(): Observable<Array<Product>> {
        const products = new Array<Product>();

        products.push(new Product('First', 'The first product in the store', 12.99, true, 1));
        products.push(new Product('Second', 'The second product in the store', 2.18, true, 2));
        products.push(new Product('Third', 'The third product in the store', 5.75, true, 3));
        products.push(new Product('Fourth', 'The fourth product in the store', 9, true, 4));
        products.push(new Product('Fifth', 'The fifth product in the store', 22, false, 5));
        products.push(new Product('Sixth', 'The sixth product in the store', 18, false, 6));

        return of(products);
    }
}
