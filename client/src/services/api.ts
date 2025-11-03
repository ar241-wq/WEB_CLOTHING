import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
interface RegisterData {
  name?: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ProfileUpdateData {
  name?: string;
  email?: string;
  avatarUrl?: string;
}

interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

export const authAPI = {
  register: (data: RegisterData) => api.post('/auth/register', data),
  login: (data: LoginData) => api.post('/auth/login', data),
  logout: () => api.post('/auth/logout'),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data: ProfileUpdateData) => api.put('/auth/profile', data),
  changePassword: (data: ChangePasswordData) => api.put('/auth/change-password', data),
};

// Products API
interface ProductCreateData {
  title: string;
  description?: string;
  price: number;
  stock?: number;
  images?: string[];
  collectionId?: string;
  featured?: boolean;
  [key: string]: any;
}

export type ProductUpdateData = Partial<ProductCreateData>;

export const productsAPI = {
  getAll: (params?: Record<string, unknown>) => api.get('/products', { params }),
  getById: (id: string) => api.get(`/products/${id}`),
  create: (data: ProductCreateData) => api.post('/products', data),
  update: (id: string, data: ProductUpdateData) => api.put(`/products/${id}`, data),
  delete: (id: string) => api.delete(`/products/${id}`),
  toggleFeatured: (id: string) => api.patch(`/products/${id}/featured`),
  updateStock: (id: string, data: { stock: number }) => api.patch(`/products/${id}/stock`, data),
};

// Collections API
export const collectionsAPI = {
  getAll: (params?: any) => api.get('/collections', { params }),
  getById: (id: string) => api.get(`/collections/${id}`),
  create: (data: any) => api.post('/collections', data),
  update: (id: string, data: any) => api.put(`/collections/${id}`, data),
  delete: (id: string) => api.delete(`/collections/${id}`),
  addProduct: (id: string, productId: string) => api.post(`/collections/${id}/products/${productId}`),
  removeProduct: (id: string, productId: string) => api.delete(`/collections/${id}/products/${productId}`),
  toggleFeatured: (id: string) => api.patch(`/collections/${id}/featured`),
  toggleActive: (id: string) => api.patch(`/collections/${id}/active`),
};

// Upload API
export const uploadAPI = {
  single: (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    return api.post('/upload/single', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  multiple: (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append('images', file));
    return api.post('/upload/multiple', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  delete: (filename: string) => api.delete(`/upload/${filename}`),
};

// Orders API
export const ordersAPI = {
  create: (data: any) => api.post('/orders', data),
  getMyOrders: () => api.get('/orders/my-orders'),
  getAll: (params?: any) => api.get('/orders', { params }),
  getById: (id: string) => api.get(`/orders/${id}`),
  updateStatus: (id: string, data: any) => api.patch(`/orders/${id}/status`, data),
  cancel: (id: string) => api.patch(`/orders/${id}/cancel`),
  getStats: () => api.get('/orders/stats/overview'),
};

export default api;