// Variables
    var p1Button = document.querySelector("#p1");
    var p2Button = document.querySelector("#p2");
    var p1Display = document.querySelector("#one");
    var p2Display = document.querySelector("#two");
    var resetButton = document.querySelector("#reset");
    var numInput = document.querySelector("input");
    var goalDisplay = document.querySelector("p span")
    var p1Score = 0;
    var p2Score = 0;
    var goal = 5;
    var gameOver = false;

// Functions
    function reset(){
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = p1Score;
        p2Display.textContent = p2Score;
        p1Display.classList.remove("winner");
        p1Display.classList.remove("loser");
        p2Display.classList.remove("winner");
        p2Display.classList.remove("loser");
        gameOver = false;
    }


// Event Listeners
    p1Button.addEventListener("click", function(){
        if(!gameOver){
            p1Score++;
            if(p1Score === goal){
                console.log("Player 1 wins")
                p1Display.classList.add("winner");
                p2Display.classList.add("loser");
                gameOver = true;
            }
            p1Display.textContent = p1Score;    
        }
    });
    p2Button.addEventListener("click", function(){
        if(!gameOver){
            p2Score++;
            if(p2Score === goal){
                console.log("Player 2 wins")
                p2Display.classList.add("winner");
                p1Display.classList.add("loser");
                gameOver = true;
            }
        p2Display.textContent = p2Score;
        }
    });
    resetButton.addEventListener("click", function(){
        reset();
    });
    numInput.addEventListener("change", function(){
        goalDisplay.textContent = this.value;
        goal = Number(this.value);
        reset();
    })
    