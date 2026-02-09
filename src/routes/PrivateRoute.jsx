import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext"; // Lo crearemos en el paso 5

function PrivateRoute({ children }) {
  // Obtener estado de autenticación
  const { isAuthenticated } = useAuth();

  // Lógica de Protección
  // Si No esta autenticado -> redirigir a login
  // Si Sí esta autenticado -> mostrar el componente hijo
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
