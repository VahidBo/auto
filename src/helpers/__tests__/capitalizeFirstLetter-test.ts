import { capitalizeFirstLetter } from "../capitalizeFirstLetter";

it("Test capitalizeFirstLetter helper", () => {
  expect(capitalizeFirstLetter("")).toBe("");
  expect(capitalizeFirstLetter("Hello")).toBe("Hello");
  expect(capitalizeFirstLetter("hello")).toBe("Hello");
  expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
});
