import api from "../../../services/api";

const ENDPOINT = "/products";

export const productService = {
  getAll: async (params = {}) => {
    const response = await api.get(ENDPOINT, { params });
    return response;
  },
  getById: async (id) => {
    const response = await api.get(`${ENDPOINT}/${id}`);
    return response;
  },
  create: async (productData) => {
    const response = await api.post(ENDPOINT, productData);
    return response;
  },
  update: async (id, productData) => {
    const response = await api.put(`${ENDPOINT}/${id}`, productData);
    return response;
  },
  delete: async (id) => {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response;
  },
};
