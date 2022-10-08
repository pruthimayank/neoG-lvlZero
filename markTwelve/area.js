const sides = document.querySelectorAll(".side-length")
const areaBtn = document.querySelector("#area-btn")
const output = document.querySelector("#output")

function areaEquation(b,h){
    const area = (b*h)/2
    return area
}

function calculateArea(){
    area = areaEquation(Number(sides[0].value), Number(sides[1].value))
    output.innerText = "The Area is: " + area + " cm²"
}

areaBtn.addEventListener("click", calculateArea)