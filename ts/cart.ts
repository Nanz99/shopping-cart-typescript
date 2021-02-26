
import {CartItem} from './cart-item';
import { Product } from './product';

class Cart {
   private cartItems: CartItem[] = [];
   
   public addProduct(product: Product, quantity: number): void {

   }
   public updateProduct(product: Product, quantity: number): void {

   }
   public removeProduct(product: Product): void {

   }
   public isEmpty(): boolean {
      return true;
   }
   public getToTalQuantity(): number {
      return ;
   }
   public getTotalPrice(): number {
      return 10;
   }
   public showCartBodyInHTML(): String {
      return "!23";
   }
   public showCartFooterInHTML(): string {
      return "122";
   }
}