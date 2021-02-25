import {Product} from './product';
class ProductRepository {
   private product: Product[] = [];
   constructor(){
   
   }

   public addItem(product: Product){
      
   }
   public getItems(): Product[]{
      return [];
   }
   public getItemById(id: number): Product{
      return new Product();
   }
   public showItemsInHTML(): string{
      return "aaa";
   }
   
}