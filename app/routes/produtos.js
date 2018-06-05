module.exports = function(app){
  app.get("/produtos", function(request, response){
    var connection = app.infra.connectionFactory();
    var produtosBanco = app.infra.produtosBanco;
    console.log("Listando...");

    produtosBanco.lista(connection, function(err, results){
      response.render("produtos/lista", {lista:results});
    });
    connection.end();
  });
}
