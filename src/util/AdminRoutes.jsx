import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function AdminRoutes() {
  let auth = localStorage.getItem("role");

  return auth === "admin" ? <Outlet /> : <Navigate to="/login" />;
}

export default AdminRoutes;
