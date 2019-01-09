import { Product } from './product';

export class ProductQuantity extends Product {
  constructor(product: Product, quantity?: number) {
    super(product.name, product.description, product.price, product.available, product.id);

    if (quantity !== undefined) {
      this.quantity = quantity;
    }
  }

  public quantity = 1;
}
