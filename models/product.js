const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  // static called on the class itself like Product.fetchAll()
  static fetchAll() {
    return products;
  }
};
