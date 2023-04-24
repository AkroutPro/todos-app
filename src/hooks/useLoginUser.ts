import { useMutation } from "react-query";
import { login } from "../services/AuthService";
import { AuthResponse } from "../models/User";
export const useLoginUser = () => {
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: async ({ email, password }) => login(email, password),
    onSuccess: (data: AuthResponse) => {
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { loginUser: mutate, isLoading, isSuccess, isError };
};
