const Candy = require("./candy");
// const ShoppingBasket = require("./shoppingBasket");

class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.candies = []
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  addItem(item) {
    this.candies.push(item)
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }

}

candy = new Candy("Mars", 4.99)
s = new ShoppingBasket()
s.addItem(candy)
s.applyDiscount(3)
console.log(s.getTotalPrice().toFixed(2))
