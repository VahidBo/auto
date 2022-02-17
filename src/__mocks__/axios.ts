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

const get = (url: string) => {
  if (url === "/api/colors") {
    return Promise.resolve(mockColors);
  }
  if (url === "/api/manufacturers") {
    return Promise.resolve(mockManufacturer);
  }
  return Promise.reject(new Error("Not found"));
};

const axios = {
  create: jest.fn().mockReturnValue({ get }),
};

export default axios;
