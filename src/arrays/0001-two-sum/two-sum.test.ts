import twoSum from "./two-sum";

describe("0001 - Two Sum", () => {
  it("basic", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("no pair", () => {
    expect(twoSum([1, 2, 3], 100)).toEqual([]);
  });
});
