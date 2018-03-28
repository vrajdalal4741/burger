//allows your server to run locally, allows you to use handlebars, allows you use bodyParses;
const express = require('express');
const methodOverride = require('method-override');
//makes json objects readable to the browser;
const bodyParser = require('body-parser');
//
const PORT = process.env.PORT || 8080;

const app = express();
//.static shows express() where to looks for html templating/styling;
app.use(express.static('public'));
app.use(express.static('public/assets/img'));
//
app.use(bodyParser.urlencoded({ extended: false }));
//
app.use(bodyParser.json());

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

const routes = require('./controllers/burgers_controllers.js');
app.use(routes);
//this starts the server;
app.listen(PORT, function() {
	console.log("App now listening at localhost: " + PORT);
	});
