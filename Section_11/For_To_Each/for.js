var numbers = [1,2,3,4,5,6,7,8,9,10];

// forEach version
/*numbers.forEach(function(color) {
    if(color % 3 === 0) {
        console.log(color);
    }
})*/

// for version
for (var color = 1; color < numbers.length; color++) {
    if(color % 3 === 0) {
        console.log(color);
    }
    
}