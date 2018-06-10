var http = require("http");

var config = {
  hostname: "localhost",
  port: 3000,
  path: "/produtos",
  method: "post",
  headers: {
    "Accept":"application/json", //Especifica que RECEBE dados em JSON
    "Content-type":"application/json" //Especifica que ENVIA dados em JSON
  }
};

var client = http.request(config, function(response){
  console.log(response.statusCode);
  response.on("data", function(body){
    console.log("Corpo"+body);
  });
});

var produto = {
  titulo: "",
  descricao: "One more test",
  preco: 10000
};

client.end(JSON.stringify(produto));
