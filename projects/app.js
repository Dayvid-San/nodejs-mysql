const express = require('express');
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const porta = 8080;
const Post = require('./models/Post');



// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json())



// Rotas

app.get('/', function(req, res){
    Post.all({order: [['id', 'DESC']]}).then(function(posts){ // Vai passar todos os posts da tabela para a HOME
        res.render('home', {posts: posts})
    })
})

app.get('/cad', function(req, res){
    res.render('formulario') // digite o nome do arquivo
});

app.post('/add', function(req, res){ // Metodo POST é mais seguro para envio de dados
    Post.create({
        titulo: req.body.titulo,
        conteudo : req.body.conteudo
    }).then(function(){
        res.redirect('/')  // para redirecionamento de página
    }).catch(function(erro){
        res.send("Houve um erro: "+erro);
    })
});

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Postagem deletada')
    }).catch(function(erro){
        res.send('Essa postagem não existe')
    })
})

app.listen(porta, function(){
    console.log("O servidor está rodando na URL: http://localhost:" + porta);
});
