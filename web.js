var express  = require('express'),
    app = express.createServer(express.logger());

app.use(express.static(__dirname+"/assert"));
app.get('/admin/parse', function(request, response) {
      require("./parse.js").run();
      response.send('Hello World!');
});


app.get('/tw', function(request, response) {
      response.setHeader("Content-Type" , "charset=utf-8");
      response.sendfile(__dirname+'/assert/index.html');
});
/*
app.get('/css/all.css', function(request, response) {
      response.sendfile(__dirname+'/assert/css/all.css');
});
*/
var port = process.env.PORT || 3000;
app.listen(port, function() {
      console.log("Listening on " + port);
});
