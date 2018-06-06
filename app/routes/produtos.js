module.exports = function(app){

  var listaProdutos = function(request, response){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    console.log("Listando...");
    produtosDAO.lista(function(error, results){
      response.render("produtos/lista", {lista:results});
    });
    connection.end();
  };

  app.get("/produtos", listaProdutos);


  app.get("/produtos/form", function(request, response){
    response.render("produtos/form");
  });


  app.post("/produtos", function(request, response){

    var produto = request.body;
    console.log(produto);
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.salva(produto, function(error, results){
      response.redirect("/produtos");
    });
    connection.end();
  });
}
