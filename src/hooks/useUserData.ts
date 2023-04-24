import { useQuery } from "react-query";
import { fetchUserData } from "../services/AuthService";
export const useUserData = () => {
  const token = localStorage.getItem("token");
  const { data, isLoading, error, isFetching } = useQuery(
    ["userData", token],
    () => fetchUserData(token as string),
    {
      enabled: !!token,
    }
  );

  return { userData: data?.user, isLoading, error, isFetching };
};
