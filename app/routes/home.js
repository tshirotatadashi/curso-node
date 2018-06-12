module.exports = function(app){
  app.get("/", function(request, response){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.lista(function(error, results){
      response.render("home/index", {livros:results});
    });
    connection.end();
  });
}
