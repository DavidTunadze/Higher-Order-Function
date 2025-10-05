//
let length = 19, width = 22; //feet

//One gallon covers 350 square feet.
//1 gallon = 3.7L
//1 gallon / 350 square feet = 0.0028571429

function paintCalculator (x, y) {
    let gallon = 1;
    let squareFeet = x * y;
    let gallonSquareFeet = gallon / squareFeet;
    return gallonSquareFeet;
}

console.log (length, width);