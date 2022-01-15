const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '1234dss', {
    host: 'localhost',
    dialect: 'mysql'
});


/*
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log('Conectou não. Deu ruim!'+erro)
})
*/


// MODELS
// postagens
// Já está criando uma tabale
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    consteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

//INSERINDO DADOS
Postagem.create({
    titulo: 'Aprendendo DB com NODEJS',
    consteudo: 'Woohoo! Estou aprendendo....'
})