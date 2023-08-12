import { useQuery } from "react-query";
import { getUserData } from "../api/api-services";

const getUserMutation = async (id: number) => {
  const response = await getUserData(id);
  return response;
};

export const useGetUserData = (id: number | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    enabled: id !== null,
    queryFn: () => getUserMutation(id!),
  });

  return {
    data,
    isLoading,
    error,
  };
};
