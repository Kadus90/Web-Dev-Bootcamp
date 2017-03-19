// printReverse()
    // define function
    function printReverse(input) {
        // create a var to hold data
        var reverse = new Array;
        // move through data
        for (var i = 0; i < input.length; i++) {
            reverse.unshift(input[i]);
        }
        // return data
        return reverse;

        /* Shown method
        for(var i = input.length - 1; i >= 0; i--){
            console.log(input[i]);
        }*/
    }

// isUniform()
    // define function
    function isUniform(input) {
        
        // loop through and see if the array is Uniform
        for (var i = 1; i < input.length; i++) {
            // if will compare each item    
            if(input[i] !== input[0]) 
                return false;
            
            }
            // if all match, then it passes
            return true;
    }

// sumArray()
    //define function
    function sumArray(input) {
        // store result
        var combinedInput = 0;

        // loop through the array
        for (var i = 0; i < input.length; i++) {
            combinedInput += input[i];
            
        }
        // Shown solution
        /* var total = 0;
        input.forEach(function(element){
            total += element;
        })
        return total;
        */ 
        // return the total
        return combinedInput;
    }

// max()
    // define function
    function max(input) {
        // store highest value
        var largeInput = input[0];

        // loop through the array
        for (var i = 1; i < input.length; i++) {
           if (input[i] > largeInput) {
               largeInput = input[i];   
           } 

    }
        // return the value
        return largeInput;
        }