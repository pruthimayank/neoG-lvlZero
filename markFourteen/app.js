var initialPrice = document.querySelector("#initial-price")
var stocksQuantity = document.querySelector("#stocks-quantity")
var currentPrice = document.querySelector("#current-price")
var submitBtn = document.querySelector("#submit-btn")
var output = document.querySelector("#output")

function calculateProfithandler(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss / initial) * 100;
        output.innerText = `Hey the loss is ${loss} and the loss percentage is ${lossPercentage}%`;
    } else if (current > initial) {
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit / initial) * 100;
        output.innerText = `Hey the profit is ${profit} and the profit percentage is ${profitPercentage}%`;
    } else {
        output.innerText = `No pain no gain and no gain nogain`;
    }
}


function clickhandler() {
    var iP = Number(initialPrice.value);
    var sQ = Number(stocksQuantity.value);
    var cP = Number(currentPrice.value);
    calculateProfithandler(iP, sQ, cP);
}

submitBtn.addEventListener("click", clickhandler)