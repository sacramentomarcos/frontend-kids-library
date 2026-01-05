import axios from 'axios'
import dotenv from "dotenv"
dotenv.config()

// Base URL para chamadas à API. Defina VITE_API_BASE_URL em .env para alterar.
export const API_BASE: string = process.env.VITE_API_BASE_URL ? process.env.VITE_API_BASE_URL : 'deu errado'

export const axiosInstance = axios.create({
  baseURL: API_BASE,
})

export default axiosInstance
