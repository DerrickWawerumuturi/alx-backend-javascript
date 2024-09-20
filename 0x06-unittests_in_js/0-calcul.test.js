const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("cheking if numbers round", function () {
    const res = calculateNumber(1, 2);
    assert.strictEqual(res, 3);
  });
  it("return 5 if inputs are 1 and 3.7", function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it("return 5 if inputs are 1 and 3.7", function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it("return 5 if inputs are 1.2 and 3.7", function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it("return 6 if inputs are 1.5 and 3.7", function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it("should handle negative numbers correctly", function () {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });
  it("should handle edge cases of 0", function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
