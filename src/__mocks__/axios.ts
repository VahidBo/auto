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

const mockCars = {
  data: {
    cars: [
      {
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
      {
        stockNumber: 41401,
        manufacturerName: "Chrysler",
        modelName: "300 C",
        mileage: {
          number: 2342,
          unit: "km",
        },
        fuelType: "Diesel",
        color: "red",
        pictureUrl: "http://localhost:3001/car.svg",
      },
    ],
    totalPageCount: 1,
    totalCarsCount: 2,
  },
};

const get = (url: string) => {
  if (url === "/api/colors") {
    return Promise.resolve(mockColors);
  }
  if (url === "/api/manufacturers") {
    return Promise.resolve(mockManufacturer);
  }
  if (url === "/api/cars") {
    return Promise.resolve(mockCars);
  }
  return Promise.reject(new Error("Not found"));
};

const axios = {
  create: jest.fn().mockReturnValue({ get }),
};

export default axios;
