import React from "react";
import useAuth from "./../component/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = useAuth();
  if (!token) return <Navigate to="/" />;
  return <Outlet />;
};

export default PrivateRoutes;
