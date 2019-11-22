# Friend Finder

## Project Functionality
This is a full-stack Node.js app that determines a measure of friendship compatibility.  The user answers 10 personality-based questions, using a scale provided in a drop-down.  The app then compares their answers with other users who have completed the survey and finds and displays the closest match. The match criteria considers the aggregate variance in response scores. 

## Project Challenges
The main challenges of this project, and the solutions used, were as follows:
1. response routing: the server is designed to handle both GET requests and POST requests using the Express.js framework.  
2. calculation of friendship compatibility: when a new user submits a survey, javascript is used to compare their scores, on a per question basis, against others using a "loop within a loop" approach to determine the closest match. 
3. display of results: a modal pop-us is used for this purpose, and is part of the POST request inititiated when the user submits their responses. 

## Project Usefulness
There are 3 main areas of note:
1. It uses Express.js, the most widely used Node.js server framework, to build a server on the back end
2. It uses the Path package to get the correct file path for HTML requests.
3. It uses the jQuery library including click events and DOM manipulation 

## How to get started
On page load, the user clicks the "Go to Survey" link and then enters their name, attaches a link to a photo, and answers the 10 questions, the clicks "Submit".    

## How to get help
[Express.js](https://expressjs.com/)
[jQuery Official Website](https://jquery.com/)

## Project maintenance and contributions
This is not an original game.  Instead, this project was prepared as part of an assignment for Georgia Tech's Full Stack Coding Boot Camp (Oct 2019 to Jan 2020).

## Deployed link
https://intense-brook-71459.herokuapp.com/
