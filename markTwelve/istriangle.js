const angleInput = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const output = document.querySelector("#output")

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value))
    if(sumOfAngles === 180){
        output.innerText = "The angles form a triangle";
    }else{
        output.innerText = "The angles don't form a triangle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle)
