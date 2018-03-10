// Dependencies

// =============================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App

// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use('/css', express.static(__dirname + '/app/public/css'));


var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Requiring other files

require('./app/routing/apiRoutes.js')(app);

// ===== When using ROUTER =====

var htmlRoutes = require('./app/routing/htmlRoutes.js');
app.use('/', htmlRoutes);

var apiRoutes = require('./app/routing/apiRoutes.js');
app.use('/', apiRoutes);

// ============================================================

// Starts the server to begin listening

// =============================================================

app.listen(PORT, function(err) {

    if (err) {

        console.log(err);

    }

    console.log('App listening on PORT ' + PORT);

});