import React from "react";
import useLogin from "../hooks/useLogin";
import { useState } from "react";

function LoginPage() {
  const { loading, error, handleLogin } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Llena todos los campos");
      return;
    }

    handleLogin({ email, password });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", padding: "20px" }}>
      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleSubmit}>
        {/* 📧 EMAIL */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            disabled={loading}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* 🔒 PASSWORD */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            disabled={loading}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* ❌ MOSTRAR ERROR SI EXISTE */}
        {error && (
          <div
            style={{
              color: "red",
              marginBottom: "15px",
              padding: "10px",
              backgroundColor: "#fee",
              borderRadius: "4px",
            }}
          >
            {error}
          </div>
        )}

        {/* 🔘 BOTÓN */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
          }}
        >
          {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </button>
      </form>

      {/* 💡 DATOS DE PRUEBA (TEMPORAL) */}
      <div style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        <p>
          <strong>Datos de prueba:</strong>
        </p>
        <p>Email: test@example.com</p>
        <p>Password: 123456</p>
      </div>
    </div>
  );
}

export default LoginPage;
