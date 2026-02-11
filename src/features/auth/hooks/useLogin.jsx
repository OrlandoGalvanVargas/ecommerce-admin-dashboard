import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/AuthContext";
import authService from "../services/authService";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      setLoading(true);
      setError(null);

      const data = await authService.login(credentials);
      login(data.user, data.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message || "Error al hacer login");
      console.log("Error en login: ", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleLogin };
}
