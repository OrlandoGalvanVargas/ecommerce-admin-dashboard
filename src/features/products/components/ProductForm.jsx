import { useEffect, useState } from "react";

function ProductForm({ initialData = null, onSubmit, onCancel, isSubmitting }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    category: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        price: initialData.price || "",
        description: initialData.description || "",
        stock: initialData.stock || "",
        category: initialData.category,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price) {
      alert("Nombre y precio son obligatorios");
      return;
    }

    const dataToSend = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    };

    onSubmit(dataToSend);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
      <div style={fieldStyle}>
        <label htmlFor="name" style={labelStyle}>
          Nombre *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          style={inputStyle}
          placeholder="Ej: Laptop Dell XPS 13"
        />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="price" style={labelStyle}>
          Precio *
        </label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          disabled={isSubmitting}
          required
          style={inputStyle}
          placeholder="0.00"
        />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="stock" style={labelStyle}>
          Stock
        </label>
        <input
          id="stock"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          disabled={isSubmitting}
          style={inputStyle}
          placeholder="0"
        />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="category" style={labelStyle}>
          Categoría
        </label>
        <input
          id="category"
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          disabled={isSubmitting}
          style={inputStyle}
          placeholder="Ej: Electrónica"
        />
      </div>

      <div style={fieldStyle}>
        <label htmlFor="description" style={labelStyle}>
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          disabled={isSubmitting}
          rows="4"
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Descripción del producto..."
        />
      </div>

      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={buttonStyle("#007bff", isSubmitting)}
        >
          {isSubmitting ? "Guardando..." : "Guardar"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          style={buttonStyle("#6c757d", isSubmitting)}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

const fieldStyle = {
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "500",
  fontSize: "14px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ced4da",
  borderRadius: "4px",
  fontSize: "14px",
};

const buttonStyle = (color, disabled) => ({
  padding: "10px 24px",
  backgroundColor: disabled ? "#ccc" : color,
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: disabled ? "not-allowed" : "pointer",
  fontSize: "14px",
  fontWeight: "500",
});

export default ProductForm;
