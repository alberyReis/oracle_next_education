async function listaVideos() {
    const conexao = await fetch('http://localhost:5500/videos')
    const conexaoConvertidada = await conexao.json()
    return conexaoConvertidada
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch('../db.json', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok) {
        throw new Error('Não foi possivel enviar o vídeo.')
    }
    const conexaoConvertidada = await conexao.json()
    return conexaoConvertidada
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:5500/videos?q=${termoDeBusca}`)
    const conexaoConvertidada = conexao.json()

    return conexaoConvertidada
}

export const conectaApi = {
    listaVideos, 
    criaVideo,
    buscaVideo
}