import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./store/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Envuelve toda la app */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
