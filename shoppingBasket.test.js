const ShoppingBasket = require("./shoppingBasket");

const candyDouble = { name: "Mars", price: 4.99};

describe("ShoppingBasket", () => {
  it("we can create an instance of ShoppingBasket ", () => {
    const shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket).toBeInstanceOf(ShoppingBasket);
  });

  it("returns zero when ShoppingBasket is empty ", () => {
    const shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket.getTotalPrice()).toBe(0);
  });

  it("returns the price of a candy", () => {
    const shoppingBasket = new ShoppingBasket();
    console.log(shoppingBasket.addItem(candyDouble));
    expect(shoppingBasket.getTotalPrice()).toBe(4.99);
  });
});
