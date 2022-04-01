const express = require('express'); // importando o express

const app = express(); // criando a aplicação

const { sequenciador, removedor, adicionador } = require('../controladores/roundmanager')




app.get('/', sequenciador);

app.get('/remover', removedor)

app.get('/adicionar', adicionador);

app.listen(8000)