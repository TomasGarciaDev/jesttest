const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.basket = []
  }
  addItem(item) {
    this.basket.push(item)
  }

  getTotalPrice() {
    let total = 0
    this.basket.map((item) => {
      total += item.price
    });
    return total
  }
}

module.exports = ShoppingBasket;