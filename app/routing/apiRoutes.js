// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source. 
// This data source holds an array of information on friends data.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // When a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a survey and thus submits data to the server.
    // ...the JSON is pushed to the array
    // (ex. User fills out a survey... this data is then sent to the server...
    // Then the server saves the data to the friendsData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function(req, res) {
        // Our "server" will respond with match info

        var newSurvey = req.body;
        console.log(newSurvey);

        //start of match calculation
        let minScore = 40;
        let sum = 0;
        let diff = 0;
        let bestMatch = {};

        for (let i = 0; i < friendsData.length; i++) {
            // console.log("friendsData length: " + friendsData.length);

            for (let k = 0; k < friendsData[i].answers.length; k++) {
                // console.log("friendsData answers length for i: " + friendsData[i].answers.length);

                let num1 = (friendsData[i].answers[k]);
                console.log("num1: " + num1);

                let num2 = (newSurvey.answers[k]);
                console.log("num2: " + num2);

                let diff = Math.abs(num1 - num2);
                console.log("Diff: " + diff);

                sum += diff;
                console.log("Sum:  " + sum);

                console.log("________________________")

            };

            if (sum < minScore) {
                minScore = sum;
                console.log("new minScore: " + minScore);
                bestMatch.name = friendsData[i].name;
                console.log("best match name: " + bestMatch.name);
                bestMatch.photo = friendsData[i].photo;
                console.log("best match photo: " + bestMatch.photo);

            } else {
                console.log("score not lower");
            };
            sum = 0;

            console.log("________________________")
        };

        //best match details returned
        res.json(bestMatch);

        //then just completed survey added to server side array
        friendsData.push(req.body);

    });

};