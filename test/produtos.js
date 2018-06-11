//Pesquisar sobre node-database-cleaner
var express = require("../config/express")();
var request = require("supertest")(express);

describe("#ProdutosControler", function(){

  beforeEach(function(done){
    var connection = express.infra.connectionFactory();
    connection.query("delete from livros", function(ex, result){
      if(!ex){
        done();
      }
      else{
        done();
      }
    });
  });

  it("#Listagem JSON", function(done){
    request.get("/produtos")
    .set("Accept", "application/json")
    .expect("Content-Type",/json/)
    .expect(200, done);
  });

  it("#Cadatro de Livros com erros", function(done){
    request.post("/produtos")
    .send({titulo:"", descricao:""})
    .expect(400, done);
  });

  it("#Cadatro de Livros com dados válidos", function(done){
    request.post("/produtos")
    .send({titulo:"Teste Livro", preco:10, descricao:"1111Muaahahaha"})
    .expect(302, done);
  });

  /*it("#Cadatro de Livros com erros - html", function(done){
    request.post("/produtos")
    .set("Content-type","text/html")
    .send({titulo:"", descricao:""})
    .expect(400, done);
  });*/


});
