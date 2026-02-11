import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useProductForm from "../hooks/useProductForm";
import ProductForm from "../components/ProductForm";

function ProductFormPage() {
  const { id } = useParams;
  const navigate = useNavigate();

  const { product, loading } = useProduct(id);
  const { saving, error, saveProduct, isEditMode } = useProductForm(id);

  const handleSubmit = async (formData) => {
    try {
      await saveProduct(formData);
    } catch (error) {
      console.log("Error al guardar", error);
    }
  };

  if (loading && isEditMode) {
    return <div style={centerStyle}>Cargando producto....</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "24px" }}>
        {isEditMode ? "Editar Producto" : "Nuevo Producto"}
      </h1>

      {error && <div style={errorBoxStyle}>{error}</div>}

      <div style={cardStyle}>
        <ProductForm
          initialData={product}
          onSubmit={handleSubmit}
          onCancel={() => navigate("/products")}
          isSubmitting={saving}
        />
      </div>
    </div>
  );
}

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "32px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const errorBoxStyle = {
  backgroundColor: "#f8d7da",
  color: "#721c24",
  padding: "12px",
  borderRadius: "4px",
  marginBottom: "20px",
  border: "1px solid #f5c6cb",
};

export default ProductFormPage;
