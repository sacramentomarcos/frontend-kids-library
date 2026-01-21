import axios from 'axios'

// Base URL para chamadas à API. Defina VITE_API_BASE_URL em .env para alterar.
export const API_BASE: string = import.meta.env.VITE_API_BASE_URL || 'https://backend-kids-library-6nzgvw.fly.dev/'

export const axiosInstance = axios.create({
  baseURL: API_BASE,
})

export default axiosInstance
