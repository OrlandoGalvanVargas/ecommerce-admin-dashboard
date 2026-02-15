function OrderStatusBadge({ status }) {
  const getStatusConfig = (status) => {
    switch (status) {
      case "pending":
        return { label: "Pendiente", color: "#ffc107", bg: "#fff3cd" };
      case "completed":
        return { label: "Completada", color: "#28a745", bg: "#d4edda" };
      case "cancelled":
        return { label: "Cancelada", color: "#dc3545", bg: "#f8d7da" };
      default:
        return { label: status, color: "#6c757d", bg: "#e9ecef" };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span
      style={{
        padding: "4px 12px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "500",
        color: config.color,
        backgroundColor: config.bg,
        display: "inline-block",
      }}
    >
      {config.label}
    </span>
  );
}

export default OrderStatusBadge;
