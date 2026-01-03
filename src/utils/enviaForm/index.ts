import axiosInstance from "../api"

export default async function enviaForm(objeto:any = {}, metodo:string='POST',destinoRota: string) {
    try {
        const response = await axiosInstance.request({
            url: destinoRota,
            method: metodo as any,
            data: objeto,
            headers: {
                'Content-Type': 'application/json',
            }
        })

        console.log(objeto)
        return response.data
    } catch (e) {
        // normalize error to match previous behavior
        throw new Error('Requisição mal-sucedida')
    }
}