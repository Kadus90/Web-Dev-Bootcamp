//Node Exercise 2
//Average Grade

//Create a new file, "grader.js"

//In the file, define a new function named "average"
//It should take a single parameter: an array of test scores(all numbers)
//It should return the average score in the array, rounded to the nearest whole number

function average(arr) {
    var total = 0;
    arr.forEach(function(arr){
        total += arr;     
    });
var avg = total/arr.length;
return Math.round(avg);
}


var scores =[90, 98, 89, 100, 86, 94];
console.log(average(scores));
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
