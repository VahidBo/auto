import { removeFromArray } from "../removeFromArray";

it("Test removeFromArray method", () => {
  expect(removeFromArray([], "a")).toEqual([]);
  expect(removeFromArray(["a"], "a")).toEqual([]);
  expect(removeFromArray(["a", 1, null], "a")).toEqual([1, null]);
  expect(removeFromArray(["a", 1, null], 1)).toEqual(["a", null]);
  expect(removeFromArray(["a", 1, null], "ab")).toEqual(["a", 1, null]);
});
