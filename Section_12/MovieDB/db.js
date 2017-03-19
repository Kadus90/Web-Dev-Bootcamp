// Create Array
var movieDB = [
    {
        title: "The Big Short",
        rating: 4,
        seen: false,
    },
    {
        title: "Doctor Strange",
        rating: 4.5,
        seen: true,
    },
    {
        title: "Rogue One: A Star Wars Story",
        rating: 5,
        seen: true,
    },
    {
        title: "The Imitation Game",
        rating: 4,
        seen: true,
    }
]

// Loop through the Array
for (var i = 0; i < movieDB.length; i++) {
    console.log("You have " + movieDB[i].seen + " \"" + movieDB[i].title + "\" - " + movieDB[i].rating + " stars");
    
}

// Shown answer
/* movieDB.forEach(function(movie) {
    var result = "You have ";
    if(movie.seen){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movieDB.rating + " stars";
    console.log(result)
})*/

/* Refactored version
function buildString(movieDB){
    var result = "You have ";
    if(movie.seen){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movieDB.rating + " stars";
    return result;
}
movieDB.forEach(function(movie)
{
    console.log(buildString(movie));
});
*/