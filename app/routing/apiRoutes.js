

var friends = require('../data/friends');

// using export here as a function instead of using express.Router

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {

        res.json(friends.users);

        console.log(friends.users);

    });

    // This takes in the survey html and pushes it to the friends object

    // Add the logic here to handle the  compatibility logic. 

    app.post('/survey', function(req, res) {

        //=======LOGIC to handle the user input from the page and finds the best match =========

        var newUser = req.body;
        var totalDifference = 0;
        var personIndex = 0;

        // For each that cycles through each scoreSum of current users to find lowest score

        friends.users.forEach(function(obj, index) {

            var currentScore = 0;
            currentScore += Math.abs(newUser.scoreSum - parseInt(obj.scoreSum));           

            if (index == 0) {

                totalDifference = currentScore;
                personIndex = index;
            }
            if (totalDifference > currentScore) {

                totalDifference = currentScore;
                personIndex = index;
                console.log("In if pscore: ", totalDifference);
            }

        });

        friends.users.push(newUser);
        res.send(friends.users[personIndex]);     

    });

}