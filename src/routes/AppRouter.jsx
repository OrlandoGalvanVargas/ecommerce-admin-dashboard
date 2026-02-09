import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
("../pages/DashboardPage");
import PrivateRoute from "./PrivateRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública: Cualquiera puede entrar */}
        <Route path="/login" element={<LoginPage />} />

        {/* Ruta privada: Solo usuarios autenticados */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Redirección por defecto: Si entran a "/" -> ir a /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* 404: Ruta no encontrada */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
