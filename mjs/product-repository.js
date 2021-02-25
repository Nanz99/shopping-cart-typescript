"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class ProductRepository {
    constructor() {
        this.product = [];
    }
    addItem(product) {
    }
    getItems() {
        return [];
    }
    getItemById(id) {
        return new product_1.Product();
    }
    showItemsInHTML() {
        return "aaa";
    }
}
