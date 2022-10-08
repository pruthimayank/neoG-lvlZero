var dateOfBirth = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var checkBtn = document.querySelector("#check-btn")
var output = document.querySelector("#output")

function calculateSum(dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i))
    }
    return sum
}

function checkBirthdayIsLucky() {
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    var lucknum = luckyNumber.value

    if (sum && lucknum) {
        if (sum % lucknum === 0) {
            output.innerText = "Wow! Your Birthday is lucky!🥳"
        } else {
            output.innerText = "Your Birthday isn't that lucky"
        }
    } else {
        output.innerText = "Please fill both the fields"
    }
}

checkBtn.addEventListener("click", checkBirthdayIsLucky)