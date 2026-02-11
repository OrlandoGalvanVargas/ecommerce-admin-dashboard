// src/features/products/components/ProductTable.jsx
import { useNavigate } from "react-router-dom";

function ProductTable({ products, onDelete }) {
  const navigate = useNavigate();

  // 🗑️ MANEJAR ELIMINACIÓN
  const handleDelete = async (id, name) => {
    // Confirmación
    const confirmed = window.confirm(`¿Estás seguro de eliminar "${name}"?`);

    if (confirmed) {
      try {
        await onDelete(id);
        alert("Producto eliminado correctamente");
      } catch (err) {
        alert("Error al eliminar el producto");
      }
    }
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        {/* 🏷️ ENCABEZADOS */}
        <thead>
          <tr
            style={{
              backgroundColor: "#f8f9fa",
              borderBottom: "2px solid #dee2e6",
              color: "#000",
            }}
          >
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Nombre</th>
            <th style={headerStyle}>Precio</th>
            <th style={headerStyle}>Stock</th>
            <th style={headerStyle}>Acciones</th>
          </tr>
        </thead>

        {/* 📋 DATOS */}
        <tbody style={{ color: "#000" }}>
          {products?.map((product, id) => (
            <tr key={id} style={{ borderBottom: "1px solid #dee2e6" }}>
              <td style={cellStyle}>{product.id}</td>
              <td style={cellStyle}>{product.name}</td>
              <td style={cellStyle}>${product.price}</td>
              <td style={cellStyle}>{product.stock || 0}</td>
              <td style={cellStyle}>
                {/* 🔘 BOTONES DE ACCIÓN */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => navigate(`/products/${product.id}`)}
                    style={buttonStyle("#007bff")}
                  >
                    Ver
                  </button>
                  <button
                    onClick={() => navigate(`/products/${product.id}/edit`)}
                    style={buttonStyle("#28a745")}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id, product.name)}
                    style={buttonStyle("#dc3545")}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 🎨 ESTILOS (puedes moverlos a CSS después)
const headerStyle = {
  padding: "12px",
  textAlign: "left",
  fontWeight: "bold",
  fontSize: "14px",
};

const cellStyle = {
  padding: "12px",
  fontSize: "14px",
};

const buttonStyle = (color) => ({
  padding: "6px 12px",
  backgroundColor: color,
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "12px",
});

export default ProductTable;
