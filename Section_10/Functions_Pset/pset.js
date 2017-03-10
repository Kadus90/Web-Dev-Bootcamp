// Question 1 - isEven 
function isEven(num) {
    return num % 2 === 0
}

//alert(isEven(prompt("What's the number?")));

// Question 2 - Factorial
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    // Create a variable for the factorial to be stored
    fact_Count = num

    // For loop to move through each iteration
    for (var i = num-1; i >= 1; i--) {
        
        fact_Count *= i;
        
    }

    // return the result
    return fact_Count;
}

// Question 3 - kebab-to_snake
function kebabToSnake(str) {
    // Replace - for _

    var newStr = str.replace(/-/g, "_");    

    
    // Return string
    return newStr;
}