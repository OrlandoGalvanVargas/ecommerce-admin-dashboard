//1. Configuación Base
const BASE_URL = "https://api.backend.com";

//2. Función Helper para hacer peticiones
async function apiRequest(endpoint, options = {}) {
  // Obtener el token del localstorage (si existe)
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers, // permite agregar header extra si es necesario
  };

  // Si hay token agregarlo a todas las peticiones
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Manejo de errores centralizado
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Error en la petición");
  }

  return response.json();
}

export const api = {
  get: (endopint) => apiRequest(endopint, { method: "GET" }),
  post: (endpoint, data) =>
    apiRequest(endpoint, { method: "POST", body: JSON.stringify(data) }),
  put: (endpoint, data) =>
    apiRequest(endpoint, { method: "PUT", body: JSON.stringify(data) }),
  delete: (endopint) => apiRequest(endopint, { method: "DELETE" }),
};
