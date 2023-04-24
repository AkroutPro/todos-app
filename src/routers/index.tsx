import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTE } from "../constans/route";
import LoginForm from "../components/LoginForm";
import DashBoard from "../components/DashBoard";
import TodoList from "../components/TodoList";
import Profile from "../components/Profile";
export default function Routers() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const onLogout = useCallback(() => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }, []);
  return (
    <Routes>
      <Route path="*" element={<Navigate to={ROUTE.LOGIN} replace />} />
      <Route
        path={ROUTE.LOGIN}
        element={
          isLoggedIn ? (
            <Navigate to={ROUTE.DASHBOARD} />
          ) : (
            <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
          )
        }
      ></Route>
      <Route
        path={ROUTE.DASHBOARD}
        element={
          isLoggedIn ? (
            <DashBoard onLogout={onLogout}></DashBoard>
          ) : (
            <Navigate to={ROUTE.LOGIN} />
          )
        }
      >
        <Route
          path={ROUTE.DASHBOARD}
          element={<Navigate to={ROUTE.TODOS_LIST} replace />}
        />
        <Route path={ROUTE.USER_PROFILE} element={<Profile />} />
        <Route path={ROUTE.TODOS_LIST} element={<TodoList />} />
      </Route>
    </Routes>
  );
}
