// 1. Calculator Class
class Calculator {
    calculateSum(number1, number2) {
        return number1 + number2;
    }

    calculateDifference(number1, number2) {
        return number1 - number2;
    }
}

// 2. Biggest Class
class Biggest {
    constructor(arr) {
        this.arr = arr;
    }

    display() {
        if (this.arr.length === 0) return "Array is empty";
        let max = this.arr[0];
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] > max) {
                max = this.arr[i];
            }
        }
        return max;
    }
}

// 3. Rectangle Class
class Rectangle {
    constructor(length = 1, width = 1) {
        this._length = length;
        this._width = width;
    }

    get length() {
        return this._length;
    }

    set length(value) {
        if (value > 0) this._length = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value > 0) this._width = value;
    }

    getArea() {
        return this._length * this._width;
    }

    getPerimeter() {
        return 2 * (this._length + this._width);
    }
}

function runCalculator() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let calc = new Calculator();
    let sum = calc.calculateSum(n1, n2);
    let diff = calc.calculateDifference(n1, n2);
    document.getElementById("calcRes").innerText = "Sum: " + sum + " | Difference: " + diff;
}

function runBiggest() {
    let input = document.getElementById("arrInput").value;
    let numbers = input.split(",").map(Number);
    let b = new Biggest(numbers);
    let max = b.display();
    document.getElementById("biggestRes").innerText = "Largest element: " + max;
}

function runRectangle() {
    let l = Number(document.getElementById("rectLen").value);
    let w = Number(document.getElementById("rectWid").value);
    let rect = new Rectangle();
    if (l) rect.length = l;
    if (w) rect.width = w;
    document.getElementById("rectRes").innerText = "Area: " + rect.getArea() + " | Perimeter: " + rect.getPerimeter();
}
