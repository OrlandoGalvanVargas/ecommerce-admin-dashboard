import { useEffect, useState } from "react";
import { productService } from "../services/productService";

function useProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await productService.getAll();

      setProducts(data.data);
    } catch (error) {
      setError(error.message || "Error al obtener los productos");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      setLoading(true);
      setError(null);

      await productService.delete(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      return true;
    } catch (error) {
      setError(error.message || "Error al eliminar el producto");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts, deleteProduct };
}

export default useProducts;
