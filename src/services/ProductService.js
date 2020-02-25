import products from "./products-data";

export default class ProductService {
  static getProducts() {
    return products ? products : [];
  }
}
