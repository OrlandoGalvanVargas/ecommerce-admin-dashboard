import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext"; // Lo crearemos en el paso 5

function PrivateRoute({ children }) {
  // Obtener estado de autenticación
  const { isAuthenticated, loading } = useAuth();

  // ⏳ SI ESTÁ VERIFICANDO SESIÓN → MOSTRAR LOADING
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>Verificando sesión...</div>
      </div>
    );
  }

  // 🔐 SI NO ESTÁ AUTENTICADO → REDIRIGIR A LOGIN
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ✅ SI ESTÁ AUTENTICADO → MOSTRAR CONTENIDO
  return children;
}

export default PrivateRoute;
