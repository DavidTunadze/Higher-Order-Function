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

/*
2. Filter users by age

let userList = [
    {name: "ana", age: 19},
    {name: "lana", age: 20},
    {name: "davit", age: 17},
    {name: "anri", age: 15},
];

function userAgeFilters (array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].age > 18) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log (userAgeFilters(userList));
*/

/*
3. Filter strings by length: Given an array of strings, use a filter to create an array that contains only strings longer than 5 characters.
let userComent = [
    {coment: "abcd"},
    {coment: "abcdef"},
    {coment: "abc"},
];

function stringFiltering (array) {
    comentFiltering = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].coment.length > 5) {
            comentFiltering.push(array[i]);
        }
    }

    return comentFiltering;
}

console.log (stringFiltering(userComent));
*/

/*
4. Double numbers: Given an array of numbers, create a new array where each number is doubled.
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (number);

function doubling (array) {
    let square = [];

    for (let i = 0; i < number.length; i++) {
        square.push(number[i] * 2); 
    }

    return square;
}

console.log (doubling(number));
*/

/*
5. Given an array of user objects, create an array that returns only the user names.
let userList = [
    {
        name: "Ana",
        age: 22,
        propesion: "dessigner",
    },
    {
        name: "Tamuna",
        age: 25,
        propesion: "developer", 
    },
    {
        name: "Davit",
        age: 25,
        propesion: "Cybersecurity", 
    },

];

function removingNames (array) {
    let userName = [];

    for (let i = 0; i < array.length; i++) {
        userName.push(userList[i].name);
    }

    return userName;
}

console.log (removingNames(userList));
*/

/*
7. Given an array of strings, let's create a new array where each string is converted to uppercase, i.e., uppercase letters.

let stringArray = ["a", "b", "c", "d", "e", "f"];
console.log (stringArray[0].toUpperCase())

function higRes (array) {
    let string = [];

    for (let i = 0; i < array.length; i++) {
        string.push(array[i].toUpperCase());
    }

    return string;
}

console.log (higRes(stringArray));
*/

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function total (array) {
    let numberTotal = [];
    let sum = 0;

    for (let i = 0; i <= array.length; i++) {
        sum += i;
    }
    numberTotal.push(sum);
    
    return numberTotal;
}

console.log (total(numberArray));