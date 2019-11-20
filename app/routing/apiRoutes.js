// ===============================================================================
// LOAD DATA
// We are linking our routes to "data" sources.
// These data sources hold arrays of information on friends data.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // When a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a survey and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the array
    // (ex. User fills out a survey... this data is then sent to the server...
    // Then the server saves the data to the surveyData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function(req, res) {
        // Our "server" will respond with match info
        // req.body is available since we're using the body parsing middleware
        console.log("posting data to array in friends.js")

        //code to go here

    });

};