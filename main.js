
var wordCounter = {}

function extractBtnClicked() {
    let text = document.getElementById("textBox").value
    if (text == "") {
        return
    }
    extractWords(text)
}

function extractWords(text) {
let wordlist = text.split(/[^A-Za-z]/)
    
    wordlist.forEach(element => {
        element = element.toLowerCase()
        if (element !== "") {
            if (wordCounter[element] == null) {
                wordCounter[element] = 1 
            } else {
                wordCounter[element] = wordCounter[element] + 1 
            }
        }
        
        
    });
    
    displayResult(wordCounter)
    wordCounter = {}
}

function displayResult(wordCounter) {

    var resultsTable = document.getElementById("results")
    resultsTable.innerHTML = "<tr> <th>Word</th> <th>Count</th> </tr>"
    
    for (x in wordCounter) {
        resultsTable.innerHTML += `<tr> <td>${x}</td> <td>${wordCounter[x]}</td> </tr>`
    }
    
}