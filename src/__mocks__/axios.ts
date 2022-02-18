import { AxiosRequestConfig } from "axios";

const mockColors = {
  data: {
    colors: ["white", "red", "black"],
  },
};

const mockManufacturer = {
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

const mockCar = {
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

function generateMockCars(perPage = 10, totalPageCount = 20, totalCarsCount = 200) {
  const cars = [];
  const { car } = mockCar.data;
  for (let i = 0; i < perPage; i += 1) {
    cars.push({ ...car, stockNumber: car.stockNumber + i });
  }
  return {
    data: { cars, totalPageCount, totalCarsCount },
  };
}

const get = (url: string, config: AxiosRequestConfig) => {
  if (url === "/api/colors") {
    return Promise.resolve(mockColors);
  }
  if (url === "/api/manufacturers") {
    return Promise.resolve(mockManufacturer);
  }
  if (url === "/api/cars") {
    return Promise.resolve(generateMockCars());
  }
  return Promise.reject(new Error("Not found"));
};

const axios = {
  create: jest.fn().mockReturnValue({ get }),
};

export default axios;
