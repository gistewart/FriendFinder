// ===============================================================================
// DATA
// Below data will hold all of the data from the completed surveys
// To show the app working without lots of key entry work, some sample data is shown
// 
// ===============================================================================

var friendsData = [{
        name: "Niall",
        photo: "Niall_photo",
        answers: [5, 3, 1]
    },
    {
        name: "Harry",
        photo: "Harry_photo",
        answers: [4, 2, 5]
    },
    {
        name: "Liam",
        photo: "Liam_photo",
        answers: [3, 1, 4]
    },
    {
        name: "Louis",
        photo: "Louis_photo",
        answers: [2, 4, 1]
    }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;