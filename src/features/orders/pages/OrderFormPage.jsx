import { useParams, useNavigate } from "react-router-dom";
import useOrder from "../hooks/useOrder";
import useOrderForm from "../hooks/useOrderForm";
import OrderForm from "../components/OrderForm";

function OrderFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { order, loading } = useOrder(id);
  const { saveOrder, saving, error, isEditMode } = useOrderForm(id);

  const handleSubmit = async (orderData) => {
    try {
      await saveOrder(orderData);
    } catch (error) {
      console.log("Error al guardar la orden ", error);
    }
  };

  if (isEditMode && loading) {
    return <div style={centerStyle}>Cargando orden...</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginBotton: "8px" }}>
        {isEditMode ? "Editar Orden" : "Nueva Orden"}
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        {isEditMode
          ? "Modifica los datos de la orden existente"
          : "Crea una nueva orden seleccionando cliente y productos"}
      </p>

      {error && <div style={errorBoxStyle}>{error}</div>}

      <div style={cardStyle}>
        <OrderForm
          initialData={order}
          onSubmit={handleSubmit}
          onCancel={() => navigate("/orders")}
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

export default OrderFormPage;
