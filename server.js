var express = require('express');
var exphbs  = require('express3-handlebars');
var app = express();

//logging
app.use(express.logger({ immediate: true, format: 'dev' }));

//templating
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main',
    layoutsDir: 'src/public/views/layouts/',
}));
app.set('views', __dirname + '/src/public/views');
app.set('view engine', 'handlebars');

//static content
app.use(express.static(__dirname + "/public"));

//error handling
app.use(function(error, request, response, next) {
  console.error(error.stack);
  response.send(500, 'Sorry, an unexpected error occurred');
});

//routes
var api = require('./src/api/controllers');
app.get("/api/set/:id", api.setById);
app.get("/api/instructions/:id", api.instructionsById);

app.get('/', function (req, res) {
    res.render('home');
});

//start app
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});


