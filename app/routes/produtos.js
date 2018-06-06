module.exports = function(app){

  app.get("/produtos", function(request, response){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    console.log("Listando...");

    produtosDAO.lista(function(err, results){
      response.render("produtos/lista", {lista:results});
    });
    connection.end();
  });


}
