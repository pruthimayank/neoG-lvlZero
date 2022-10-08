var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-btn");
var errorMsg = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", () => {
    errorMsg.style.display = "none";
    table.style.display = "table";
    tableHeading.style.display = "block";

    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned);
        } else {
            showErrorMsg("The cash provided should atleast be equal to the bill amount")
        }
    } else {
        showErrorMsg("Invalid Bill Amount")
    }
})

function showErrorMsg(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

// Bonus Exercise
var nextButton = document.querySelector("#next-btn")
var labelCashGiven = document.querySelector("#label-cash-given")
var table = document.querySelector("#table")
var tableHeading = document.querySelector("#table-heading")

cashGiven.style.display = "none";
labelCashGiven.style.display = "none";
checkButton.style.display = "none";
table.style.display = "none"
tableHeading.style.display = "none"

nextButton.addEventListener("click", () => {
    cashGiven.style.display = "block";
    labelCashGiven.style.display = "block";
    checkButton.style.display = "block";
})