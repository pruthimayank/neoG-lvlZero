const sides = document.querySelectorAll(".side-length")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const output = document.querySelector("#output")

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b
    return sumOfSquares
}

function calculateHypotenuse(){
    sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
    output.innerText = "The Length of Hypotenuse is: " + Math.sqrt(sumOfSquares) + " cm"
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)

