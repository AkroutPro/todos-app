import { createContext, useState } from "react";
import { User } from "../models/User";
localStorage.setItem(
  "mockedUserData",
  JSON.stringify({
    id: "testId",
    todoList: [
      {
        id: "t1",
        name: "adzlkjbazd",
      },
      {
        id: "t2",
        name: "adzlkjazdlkjbhazbazd",
      },
    ],
  })
);
interface AuthContextState {
  user: User | null;
  setUser: (user?: User) => void;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
  setUser: () => {},
});
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
