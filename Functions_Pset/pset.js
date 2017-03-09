function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    else if (num % 2 !== 0) {
        return false
    }
    else {
        return "Not a number."
    }
}

prompt("What's the number?")