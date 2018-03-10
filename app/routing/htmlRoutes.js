

var path = require('path');

// ===== USING .Router ===========

var express = require('express');
var router = express.Router();
var app = express();

// getting access to the questions.

var questions = require('../../modules/questions');

// Basic route that sends the user to index.html page

router.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '../public/home.html'));

});

// // route to take users to the survey page

router.get('/survey', function(req, res) {

     // =======LOGIC to dynamically  generate the questions on the page ======

    var data = { q: [] };

    for (var i = 0; i < questions.length; i += 1) {

        var currentQuestion = questions[i];
        data.q.push(currentQuestion);
    }
    res.render('home', data);
});

module.exports = router;