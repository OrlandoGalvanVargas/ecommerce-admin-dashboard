import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
("../pages/DashboardPage");
import PrivateRoute from "./PrivateRoute";
import ProductListPage from "../features/products/pages/ProductListPage";
import ProductDetailPage from "../features/products/pages/ProductDetailPage";
import ProductFormPage from "../features/products/pages/ProductFormPage";

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
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductListPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/products/new"
          element={
            <PrivateRoute>
              <ProductFormPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <ProductDetailPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/products/:id/edit"
          element={
            <PrivateRoute>
              <ProductFormPage />
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
