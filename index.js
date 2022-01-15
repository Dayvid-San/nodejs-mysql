const express = require('express');
const app = express();
const porta = 8080;


app.get("/", function(req, res){
    //res.send("Seja bem vindo! :)");
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    //res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!");
});

app.get('/ola/:cargos/:nome', function(req, res){
    // não dá para usar mais de um SEND em uma rota
    //res.send(req.params)
    res.send("<h1>ola " + req.params.nome + "</h1>" +"<h2> Seu cargo é: "+req.params.cargos+"</h2>");
})

app.listen(porta, () =>{
    console.log("Está rodando na porta http://localhost:" + porta);
});