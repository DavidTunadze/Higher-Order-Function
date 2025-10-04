/*
1. Given an array of numbers, use a filter to create a new array that contains only even numbers.

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumber (array) {
    let newArray = [];

    for (let element of array) {
        if (element % 2 === 0) {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log (evenNumber(numberArray
));
*/


let userList = [
    {name: "ana", age: 19},
    {name: "lana", age: 20},
    {name: "davit", age: 17},
    {name: "anri", age: 15},
];

function userAgeFilters (userList) {
    let newArray = [];

    for (let i = 0; i < userList.length; i++) {
        if (userList.age > 18) {
            newArray.push(userList);
        }
    }
    return newArray;
}

console.log (userAgeFilters(userList));