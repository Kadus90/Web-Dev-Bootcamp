// Question 1
console.log("Question 1")
    // Set a count
    var countOne = -10;

    // Create a loop to count up to 19
    while (countOne < 20) {
        console.log(countOne);
        countOne++;
    }

// Question 2
console.log("Question 2")
    // Set a count
    var countTwo = 10;

    // Create a loop that prints all even numbers up to 40
    while (countTwo <= 40) {
        console.log(countTwo);
        countTwo+=2;
    }

// Question 3
console.log("Question 3")
    // Set count
    var countThree = 300;

    // Use an nested if to set countThree odd
    while (countThree <= 333) {
        if (countThree % 2 === 0) {
            countThree++;
        }
        else {
            console.log(countThree);
            countThree+=2;
        }
    }

// Question 4
console.log("Question 4")

    // Set count
    var countFour = 5;

    // Determine if the number is divisible by 5 and 3
    while (countFour <= 50) {
        if (countFour % 5 === 0 && countFour % 3 === 0) {
            console.log(countFour);
            countFour++;
        }
        else {
            countFour++;
        }
    }