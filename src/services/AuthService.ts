import { AuthResponse, UserDataResponse } from "../models/User";
export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const mockedToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE2MjAxMjI0MzV9.6zJ8DqjK6lq3CYFz67PJdGpKjwItJnFX1Zm5E5o5P2Q";
  return new Promise<AuthResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        token: mockedToken,
        user: {
          email,
          password,
        },
      });
    }, 1000);
  });
};
export const fetchUserData = async (
  token: string
): Promise<UserDataResponse> => {
  return new Promise<UserDataResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        user: JSON.parse(<string>localStorage.getItem("mockedUserData")),
      });
    }, 1000);
  });
};
