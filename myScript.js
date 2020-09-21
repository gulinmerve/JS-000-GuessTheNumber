let guess;
let count = 0 ;
let correctNumber = Math.floor((Math.random() * 100) + 1);

document.getElementById("check").addEventListener("click", checkResult);

function checkResult() {

    count ++;
    document.getElementById("guessNumber").innerHTML = "This is your test number: " + count;

    guess = document.getElementById("inputBox").value;

    if (guess == correctNumber) {
        alert("You win :) You find at "+ count + "." + " try");

        var play_again = confirm("Do you want to play again?");

        if (play_again == true) {
            count = 0;
            correctNumber = Math.floor((Math.random() * 100) + 1);
            document.getElementById("guessNumber").innerHTML = '';
            document.getElementById("result").innerHTML = '';
            document.getElementById("inputBox").innerHTML = '';
        }

        else {
            document.getElementById("guessNumber").innerHTML='';
            document.getElementById("result").innerHTML='';
            document.getElementById("thanks").innerHTML = "Thanks for playing:)"
        }
    }

    else if (guess < correctNumber) {
        document.getElementById("result").innerHTML = "I am thinking about higher number";
    }
    else if (guess > correctNumber) {
        document.getElementById("result").innerHTML = "I am thinking about lower number";
    }


document.getElementById("inputBox").value='';
document.getElementById("inputBox").focus();
}