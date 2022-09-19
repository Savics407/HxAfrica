import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  let auth = localStorage.getItem("role");

  return auth === "investor" ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
