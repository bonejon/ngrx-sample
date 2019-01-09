export class CartItem {
  public id?: number;
  public productId: number;
  public productName: string;
  public quantity: number;
  public unitPrice: number;

  public get totalPrice(): number {
    return this.unitPrice * this.quantity;
  }

  constructor() {
    const maxId = 150000;
    const minId = 1;

    this.id = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  }
}
