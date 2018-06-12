module.exports = function(app){

  var listaProdutos = function(request, response, next){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.lista(function(error, results){
      if(error){
        return next(error);
      }
      response.format({
        html: function(){
          response.render("produtos/lista", {lista:results});
        },
        json: function(){
          response.json(results);
        }
      });
    });
    connection.end();
  };

  app.get("/produtos", listaProdutos);


  app.get("/produtos/form", function(request, response){
    response.render("produtos/form", {errosValidacao:{}, produto: {}});
  });


  app.post("/produtos", function(request, response){
    console.log(request.body);
    var produto = request.body;

    request.assert("titulo", "Título é obrigatório").notEmpty();//Estou definindo que não pode ser vazio
    request.assert("preco", "Preço incorreto").isFloat();
    var error = request.validationErrors();
    if(error){
      response.status(400);
      response.format({
        html: function(){
          response.render("produtos/form",{errosValidacao: error, produto:produto});
        },
        json: function(){
          response.json(error);
        }
      });
      return;
    }

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.salva(produto, function(error, results){
      response.redirect("/produtos");
    });
    connection.end();
  });
}
