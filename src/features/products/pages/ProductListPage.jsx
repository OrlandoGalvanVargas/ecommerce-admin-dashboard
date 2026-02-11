import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductsTable from "../components/ProductsTable";

function ProductListPage() {
  const navigate = useNavigate();
  const { products, loading, error, refetch, deleteProduct } = useProducts();

  if (loading) {
    return (
      <div style={centerStyle}>
        <div>Cargando productos....</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={centerStyle}>
        <div style={{ color: "red" }}>Error: {error}</div>
        <button onClick={refetch}>Reintentar</button>
      </div>
    );
  }

  if (products?.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <div style={headerContainerStyle}>
          <h1>Productos</h1>
        </div>
        <div style={emptyStateStyle}>
          <p>No hay productos registrados</p>
          <button
            onClick={() => navigate("/products/new")}
            style={primaryButtonStyle}
          >
            Crear Primer producto
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={headerContainerStyle}>
        <h1>Productos ({products?.length})</h1>
        <button
          onClick={() => navigate("/Products/new")}
          style={primaryButtonStyle}
        >
          + Nuevo Producto
        </button>
      </div>

      <ProductsTable products={products} onDelete={deleteProduct} />
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

const headerContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
  paddingBottom: "12px",
  borderBottom: "2px solid #dee2e6",
};

const emptyStateStyle = {
  textAlign: "center",
  padding: "60px 20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
};

const primaryButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
};

export default ProductListPage;
