import React, { useContext, useEffect } from "react";
import { ROUTE } from "../constans/route";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useUserData } from "../hooks/useUserData";
import { AuthContext } from "../context/AuthContext";
import Spinner from "./Spinner";
type DashBoardProps = {
  onLogout: () => void;
};
export default function DashBoard({ onLogout }: DashBoardProps) {
  const { userData, isLoading, isFetching, isError } = useUserData();
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    if (userData?.id) {
      setUser(userData);
    }
  }, [userData]);
  if (isError) {
    return <p>Error retrieving user data.</p>;
  }
  return (
    <div className="w-full mx-auto p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
        onClick={onLogout}
      >
        Logout
      </button>
      <div className="mt-4">
        <nav>
          <ul className="flex flex-row space-x-4">
            <li>
              <Link
                to={ROUTE.USER_PROFILE}
                className="text-gray-500 hover:text-blue-500"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to={ROUTE.TODOS_LIST}
                className="text-gray-500 hover:text-blue-500"
              >
                Todos
              </Link>
            </li>
          </ul>
        </nav>
        {isLoading || isFetching ? <Spinner /> : <Outlet />}
      </div>
    </div>
  );
}
