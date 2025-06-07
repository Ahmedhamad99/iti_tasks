const opiration = require("../index");

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;
  // at before all assign pos vals with array of positive numbers,
  // and assign negative vals with negative array of numbers,
  // and assign vals to pos_vals.concat(neg_vals);
  // assign sum_of_vals to vals.reduce((x, y) => x + y, 0));
  // assign vals to pos_vals.concat(neg_vals);
  // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));
  // at before each console.log all vals
  // at after each console.log done

  // at after all set all variables to 0



  beforeAll(function () {
    pos_vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    neg_vals = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  beforeEach(function () {
    console.log(vals);
  });


  
  afterEach(function () {
    console.log("done");
  });

  it("sum function should equal to sum of the values", () => {
    expect(opiration.sum(vals)).toEqual(sum_of_vals);
  });

  it("positive function should equal to positive values", () => {
    expect(opiration.positive(vals)).toEqual(pos_vals);
  });

  afterAll(function () {
    pos_vals = 0;
    neg_vals = 0;
    vals = 0;
    sum_of_vals = 0;
  });
});
