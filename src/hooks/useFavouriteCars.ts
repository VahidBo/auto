import { useCallback, useState } from "react";
import { removeFromArray } from "src/helpers";

export const FAVOURITE_CARS_STORAGE_KEY = "FAVOURITE_CARS_STORAGE_KEY";

const getFavouriteCalors = (): number[] => {
  const cars = localStorage.getItem(FAVOURITE_CARS_STORAGE_KEY);
  return JSON.parse(cars || "[]");
};

export function useFavouriteCars(): {
  favouritCars: number[];
  addToFavouriteCars: (stockNumber: number) => void;
  removeFromFavouriteCars: (stockNumber: number) => void;
} {
  const [favouritCars, setFavouriteCars] = useState<number[]>(getFavouriteCalors);

  const addToFavouriteCars = useCallback((stockNumber: number) => {
    const currentFavouriteCars = localStorage.getItem(FAVOURITE_CARS_STORAGE_KEY);
    const parsedFavouriteCars = JSON.parse(currentFavouriteCars || "[]");
    const newFavouriteCars = new Set([...parsedFavouriteCars, stockNumber]);
    const carsArray = [...Array.from(newFavouriteCars)];
    localStorage.setItem(FAVOURITE_CARS_STORAGE_KEY, JSON.stringify(carsArray));
    setFavouriteCars(carsArray);
  }, []);

  const removeFromFavouriteCars = useCallback((stockNumber: number) => {
    const currentFavouriteCars = localStorage.getItem(FAVOURITE_CARS_STORAGE_KEY);
    const parsedFavouriteCars = JSON.parse(currentFavouriteCars || "[]");
    const newFavouriteCars = removeFromArray(parsedFavouriteCars, stockNumber);
    localStorage.setItem(FAVOURITE_CARS_STORAGE_KEY, JSON.stringify(newFavouriteCars));
    setFavouriteCars(newFavouriteCars);
  }, []);

  return { favouritCars, addToFavouriteCars, removeFromFavouriteCars };
}
