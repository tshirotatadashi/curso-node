var http = require("http");

var config = {
  hostname: "localhost",
  port: 3000,
  path: "/produtos",
  method: "get",
  headers: {
    "Accept":"application/json"
  }
};

http.get(config, function(response){
  console.log(response.statusCode);
  response.on("data", function(body){
    console.log("Corpo"+body);
  });
});


/*var cliente = http.request(config, function(response){
  console.log("Hahahahaha"+cliente.response.statusCode);
  response.on("data", function(body){
    console.log("Corpo"+body);
  });
});

client.end();*/
