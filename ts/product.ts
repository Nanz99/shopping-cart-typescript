export class Product {
   private _id: number;
   private _name: String;
   private _image: String;
   private _sumary: String;
   private _price: number;
   private _canBuy: boolean;

   public get id(): number {
      return this._id;
   }
   public set id(v: number) {
      this._id = v;
   }

   public get name(): String {
      return this._name;
   }
   public set name(v: String) {
      this._name = v;
   }

   public get image(): String {
      return this._image;
   }
   public set image(v: String) {
      this._image = v;
   }
   public get sumary(): String {
      return this._sumary;
   }
   public set sumary(v: String) {
      this._sumary = v;
   }

   public get price(): number {
      return this._price;
   }
   public set price(v: number) {
      this._price = v;
   }
   public get canBuy(): boolean {
      return this._canBuy;
   }
   public set canBuy(v: boolean) {
      this._canBuy = v;
   }
   
}


