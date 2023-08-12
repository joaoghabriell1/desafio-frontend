import { getAllUsers } from "../api/api-services";
import { useQuery } from "react-query";

export const useUsers = () => {
  const { data, isLoading, isError, error } = useQuery("users", getAllUsers);

  return {
    data: data,
    isLoading,
    isError,
    error,
  };
};
