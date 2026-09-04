function checkPositiveNegative() {
    let num = Number(document.getElementById("num1").value);
    let result = "";
    if (num > 0) {
        result = "Positive";
    } else if (num < 0) {
        result = "Negative";
    } else {
        result = "Zero";
    }
    document.getElementById("res1").innerText = "Result: " + result;
}

function checkOddEven() {
    let num = Number(document.getElementById("num2").value);
    let result = "";
    if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    document.getElementById("res2").innerText = "Result: " + result;
}

function findLargest() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    
    let largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    document.getElementById("res3").innerText = "Largest: " + largest;
}

function checkPrime() {
    let num = Number(document.getElementById("num3").value);
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        document.getElementById("res4").innerText = num + " is a Prime Number";
    } else {
        document.getElementById("res4").innerText = num + " is NOT a Prime Number";
    }
}
