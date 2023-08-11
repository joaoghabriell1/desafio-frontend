import ApiInstance from "./api-instance";
import { User } from "../types/user";

export const getAllUsers = () => {
  return ApiInstance.get<User[]>("/users");
};

export const getUserData = (id: string) => {
  return ApiInstance.get(`/users/${id}`);
};
