import ApiInstance from "./api-instance";
import { User } from "../types/user";

export const getAllUsers = () => {
  return ApiInstance.get<User[]>("/users");
};

export const getUserData = (id: number) => {
  return ApiInstance.get<User>(`/users/${id}`);
};
