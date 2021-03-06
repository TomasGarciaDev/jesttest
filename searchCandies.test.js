const searchCandies = require("./searchCandies");

describe("seachCandies", () => {
  it("returns Maltesers and Mars when Ma and 10", () => {
    expect(searchCandies("ma", 10)).toEqual(["Maltesers", "Mars"]);
  });

  it("returns Maltesers and Mars when Ma and 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Maltesers", "Mars"]);
  });

  it("returns Mars when Ma and 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("returns Skitties, Skittles and Starburst when S and 10", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });

  it("returns Skitties and Skittles when S and 4", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });

  it("returns Skitties and Skittles when S and 4", () => {
    expect(searchCandies("s", 4)).toEqual(["Skitties", "Skittles"]);
  });
});
