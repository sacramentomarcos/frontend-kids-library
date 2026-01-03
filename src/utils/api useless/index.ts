


import axiosInstance from "../api"

export default async function get<T>(rota: string): Promise<T>{
    const resposta = await axiosInstance.get(rota)
    return resposta.data as T
}