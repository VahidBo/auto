import { useFavouriteCars } from "../useFavouriteCars";
import { act, renderHook } from "@testing-library/react-hooks";

test("Add a stockNumber to favourite list and remove it using useFavouriteCars", () => {
  const { result } = renderHook(useFavouriteCars);
  expect(result.current.favouritCars).toEqual([]);

  act(() => {
    result.current.addToFavouriteCars(1000);
  });

  expect(result.current.favouritCars).toEqual([1000]);

  act(() => {
    result.current.removeFromFavouriteCars(1000);
  });

  expect(result.current.favouritCars).toEqual([]);
});
