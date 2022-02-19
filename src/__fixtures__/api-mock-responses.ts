import { AxiosResponse } from "axios";
import { CarDetailsResponseType } from "src/pages/car-details";

export const mockColors = {
  data: {
    colors: ["white", "red", "black"],
  },
};

export const mockManufacturer = {
  data: {
    manufacturers: [
      {
        name: "Fiat",
        models: [
          {
            name: "Marea",
          },
        ],
      },
    ],
  },
};

export const mockCar: Partial<AxiosResponse<CarDetailsResponseType>> = {
  data: {
    car: {
      stockNumber: 41400,
      manufacturerName: "Fiat",
      modelName: "Marea",
      mileage: {
        number: 100141,
        unit: "km",
      },
      fuelType: "Diesel",
      color: "white",
      pictureUrl: "http://localhost:3001/car.svg",
    },
  },
};
