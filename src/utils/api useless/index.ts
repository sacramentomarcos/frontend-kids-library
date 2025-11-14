


export default async function get<T>(rota: string): Promise<T>{
    const resposta = await fetch('127.0.0.1:3000' + rota)
    if (!resposta.ok) {
        throw new Error('Requisição mal-sucedida')
    }
    const dados: T = await resposta.json()
    return dados
}