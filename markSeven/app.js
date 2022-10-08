var btnTranslate = document.querySelector(".btn-translate");
var txtInput = document.querySelector(".txt-input")
var txtOutput = document.querySelector(".txt-output")

var serverurl = "https://api.funtranslations.com/translate/pirate.json"

function errorHandler(error){
    alert("Something went wrong! Try again later")
}

function translatedURL(text){
    return serverurl + "?" + "text=" + text
}

function clickHandler(){ 
    var inputText = txtInput.value;
    
    fetch(translatedURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            txtOutput.innerText = translatedText
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)