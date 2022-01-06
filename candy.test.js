const Candy = require("./candy");

describe("candy", () => {
  it("we can create an instance of candy ", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy).toBeInstanceOf(Candy);
  });

  it("returns the name of a candy ", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe("Mars");
  });
  it("returns the price of a candy ", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
});
