import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Estado (States)
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Efecto (Effects): Verficar si hay sesión generada al cargar la app
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      // Restaurar sesión
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }

    setLoading(false); // Ya terminó de verficar
  }, []);

  const login = (userData, authToken) => {
    // Guardar en localstorage (persite entre recargas)
    localStorage.setItem("token", authToken);
    localStorage.setItem("user", JSON.stringify(userData));

    // Actualizar estado
    setToken(authToken);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Limpiar localstorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Limpiar estado
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    token,
    isAuthenticated,
    loading,
    login,
    logout,
  };

  // Proveer el contexto a toda la App
  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Cargando...</div> : children}
    </AuthContext.Provider>
  );
}

// 3. HOOK Personalizado para usar el contexto
export function useAuth() {
  const context = useContext(AuthContext);

  // Validación: asegurarse de que se use dentro del Provider
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");

  return context;
}
