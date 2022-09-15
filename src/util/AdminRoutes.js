import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function AdminRoutes() {
  let auth = localStorage.getItem("user-token");

  return !!auth ? <Outlet /> : <Navigate to="/" />;
}

export default AdminRoutes;
