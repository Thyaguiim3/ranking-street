console.log('Tabela do Ranking')

let tabelaRanking = document.querySelector('.tabelaRanking')
console.log(tabelaRanking)

// ler o arquivo json
fetch('classificacaoGrupoA.json')
.then(response => response.json() )
.then (dados => dados.forEach(jogo => {
    

    //console.log(data)
    dados.sort(function compararNumeros(a,b){
        return b.pontos - a.pontos;
    }) 


    // criar uma linha de tabela, colocar ela na tabela
    let linha = document.createElement('tr')
    tabelaRanking.appendChild(linha)
    // preencher os dados do jogo em cada linha da tabela

    linha.innerHTML = `
        <td> <img class='badges' src='./images/badges/${jogo.coroas}'></td> 
        <td class='posicao'>${jogo.posicao}</td>
        <td>${jogo.nome}</td>
        <td>${jogo.ws_}</td>
        <td>${jogo.ls_}</td>
        <td>${jogo.tp_}</td>
        <td>${jogo.pontos}</td>
        <td class='futurasimagens'>${jogo.futuras_imagens}</td>
    `


})
)
