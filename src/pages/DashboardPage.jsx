import { useAuth } from "../store/AuthContext";

function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      {/* 🎉 HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          paddingBottom: "10px",
          borderBottom: "2px solid #eee",
        }}
      >
        <div>
          <h1>Dashboard</h1>
          <p>
            Bienvenido, <strong>{user?.name}</strong>
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Email: {user?.email} | Rol: {user?.role || "Usuario"}
          </p>
        </div>

        <button
          onClick={logout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* 📊 CONTENIDO TEMPORAL */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Panel Principal</h2>
        <p>Aquí irán tus features (productos, usuarios, órdenes, etc.)</p>
        <p>
          <em>Día 3: Agregaremos el primer módulo real</em>
        </p>
      </div>

      {/* 🔍 DEBUG INFO (TEMPORAL) */}
      <details style={{ marginTop: "30px" }}>
        <summary style={{ cursor: "pointer", color: "#007bff" }}>
          Ver datos de sesión (debug)
        </summary>
        <pre
          style={{
            backgroundColor: "#282c34",
            color: "#61dafb",
            padding: "15px",
            borderRadius: "4px",
            overflow: "auto",
            marginTop: "10px",
          }}
        >
          {JSON.stringify(user, null, 2)}
        </pre>
      </details>
    </div>
  );
}

export default DashboardPage;
