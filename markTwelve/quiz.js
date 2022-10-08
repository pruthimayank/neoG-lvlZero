const quizForm = document.querySelector(".quiz-form")
const submitBtn = document.querySelector("#submit-btn")
const output = document.querySelector("#output")

const correctAnswers = ["45°", "Right Angled", "Equilateral Triangle", "Perimeter"]

function calculateScore(){
    var score = 0;
    var i = 0;

    const formResults = new FormData(quizForm)
    for(let value of formResults.values()){
        if(value === correctAnswers[i]){
            score = score + 1
        }
        i = i + 1
    }

    output.innerText = "Score is: " + score;
}

submitBtn.addEventListener("click", calculateScore)