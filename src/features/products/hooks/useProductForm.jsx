import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productService } from "../services/productService";

function useProductForm(productId = null) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const isEditMode = Boolean(productId);

  const saveProduct = async (productData) => {
    try {
      setSaving(true);
      setError(null);

      let savedProduct;

      if (isEditMode) {
        savedProduct = await productService.update(productId, productData);
      } else {
        savedProduct = await productService.create(productData);
      }
      navigate("/products");
      return savedProduct;
    } catch (error) {
      setError(error.message || "Error al guardar el producto");
      console.log(error);
    } finally {
      setSaving(false);
    }
  };

  return { saving, error, saveProduct, isEditMode };
}

export default useProductForm;
