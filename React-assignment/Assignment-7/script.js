function decimalToBinary() {
    let num = Number(document.getElementById("decNum").value);
    let binary = num.toString(2);
    document.getElementById("res1").innerText = "Binary: " + binary;
}

function countChar() {
    let str = document.getElementById("textInput").value;
    let charToCount = document.getElementById("charInput").value;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToCount) {
            count++;
        }
    }
    document.getElementById("res2").innerText = "Occurrences: " + count;
}

function capitalizeWords() {
    let str = document.getElementById("strInput").value;
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    let result = words.join(" ");
    document.getElementById("res3").innerText = "Capitalized: " + result;
}
