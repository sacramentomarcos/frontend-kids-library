async function enviaForm(objeto:any, destinoRota: string) {
    const rotaCompleta = 'http://127.0.0.1:3000/' + destinoRota
    try {
    const resposta = await fetch(rotaCompleta, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: objeto
    })
        if (!resposta.ok) throw new Error('Requisição mal-sucedida')
    } catch (e){
        console.error('[ERRO] - ', e)
    }
}