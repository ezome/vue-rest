import { Request } from "./request";

export const request = new Request("user");

export const createNewUserApi = (data) => {
  return request.create(data);
};

export const getCurrentUserApi = () => {
  return request.read();
};

export const updateCurrentUserApi = (data) => {
  return request.update(data);
};
