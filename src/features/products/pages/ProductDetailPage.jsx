import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return <div style={centerStyle}>Cargando producto...</div>;
  }

  if (error) {
    return (
      <div style={centerStyle}>
        <div style={{ color: "red" }}>Error: {error}</div>
        <button onClick={() => navigate("/products")}>Volver a la lista</button>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={centerStyle}>
        <div>Producto no encontrado</div>
        <button onClick={() => navigate("/products")}>Volver a la lista</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <button
        onClick={() => navigate("/products")}
        style={secondaryButtonStyle}
      >
        Volver
      </button>

      <div style={cardStyle}>
        <div style={headerStyle}>
          <h1>{product.name}</h1>
          <button
            onClick={() => navigate(`/products/${id}/edit`)}
            style={primaryButtonStyle}
          >
            Editar
          </button>
        </div>

        <div style={detailsGridStyle}>
          <div style={detailItemStyle}>
            <span style={labelStyle}>ID:</span>
            <span>{product.id}</span>
          </div>

          <div style={detailItemStyle}>
            <span style={labelStyle}>Precio:</span>
            <span
              style={{ fontSize: "24px", fontWeight: "bold", color: "#28a745" }}
            >
              ${product.price}
            </span>
          </div>

          <div style={detailItemStyle}>
            <span style={labelStyle}>Stock:</span>
            <span>{product.stock || 0} unidades</span>
          </div>

          <div style={detailItemStyle}>
            <span style={labelStyle}>Categoría:</span>
            <span>{product.category || "Sin categoría"}</span>
          </div>
        </div>

        {product.description && (
          <div style={{ marginTop: "24px" }}>
            <h3 style={labelStyle}>Descripción:</h3>
            <p style={{ lineHeight: "1.6", color: "#495057" }}>
              {product.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  flexDirection: "column",
  gap: "12px",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "32px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  marginTop: "20px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
  paddingBottom: "16px",
  borderBottom: "2px solid #e9ecef",
};

const detailsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
};

const detailItemStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const labelStyle = {
  fontWeight: "bold",
  color: "#6c757d",
  fontSize: "14px",
  textTransform: "uppercase",
};

const primaryButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const secondaryButtonStyle = {
  ...primaryButtonStyle,
  backgroundColor: "#6c757d",
};

export default ProductDetailPage;
