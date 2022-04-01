const { application } = require("express");

const jogadores = module.require('../src/bancodedados');

let i = 0



const sequenciador = (req, res) => {

    res.send(`É a vez de ${jogadores[i]} jogar`)
    i++
    if (i >= jogadores.length) {
        i = 0

    }

}

const removedor = (req, res) => {
    const { indice } = req.query
    jogadores.splice(indice, 1)

    if (indice) {
        console.log(jogadores)
    }
    if (indice > 0 || indice < jogadores.length) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    }
}


const primeiraMaiuscula = (nome) => {
    let formatado = nome[0].toUpperCase() + nome.slice(1);
    return formatado
}

const adicionador = (req, res) => {
    const { nome, posicao } = req.query



    if (nome && posicao) {
        if (posicao > jogadores.length) {
            return res.send(`O índice informado ${posicao} não existe no array. Novo jogador não adicionado.`)
        }
        jogadores.splice(posicao, 0, (primeiraMaiuscula(nome)));

    } else if (nome) {
        jogadores.push(primeiraMaiuscula(nome));

    }
    res.send(jogadores)

}

module.exports = { sequenciador, removedor, adicionador };