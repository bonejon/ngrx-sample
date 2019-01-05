export class CartItem {
    public id?: number;
    public productId: number;
    public productName: string;
    public quantity: number;
    public unitPrice: number;
    
    public get totalPrice(): number {
        return this.unitPrice * this.quantity;
    }
}