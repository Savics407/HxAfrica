import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  let auth = localStorage.getItem("user-token");

  return !!auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
