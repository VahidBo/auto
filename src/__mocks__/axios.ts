import { AxiosRequestConfig } from "axios";
import { mockCar, mockColors, mockManufacturer } from "../__fixtures__/api-mock-responses";

function generateMockCars(perPage = 10, totalPageCount = 20, totalCarsCount = 200) {
  const cars = [];
  if (mockCar.data?.car) {
    const { car } = mockCar.data;
    for (let i = 0; i < perPage; i += 1) {
      cars.push({ ...car, stockNumber: (car.stockNumber || 0) + i });
    }
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
