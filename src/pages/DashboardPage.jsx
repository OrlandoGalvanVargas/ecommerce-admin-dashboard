import React from "react";
import { useAuth } from "../store/AuthContext";

function DashboardPage() {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>Dasboard</h1>
      <p>Bienvenido, {user.name || "Usuario"}</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
}

export default DashboardPage;
