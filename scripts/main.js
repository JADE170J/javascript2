//Reverse a String
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

// Testing
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);
console.log(reversedString);

//Count Characters
function countCharacters(inputString) {
    return inputString.length;
}

// Testing
let inputString = "Count me!";
let characterCount = countCharacters(inputString);
console.log("Number of characters:", characterCount);

//Capitalize Words
function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}

// Testing
let inputSentence = "capitalize the first letter of each word";
let capitalizedResult = capitalizeWords(inputSentence);
console.log(capitalizedResult);

//Find Maximum and Minimum
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

// Testing
let numbers = [5, 2, 9, 1, 7];
let max = findMaximum(numbers);
let min = findMinimum(numbers);
console.log("Maximum:", max);
console.log("Minimum:", min);

//Sum of Array
function calculateSum(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// Testing
let numbersToSum = [1, 2, 3, 4, 5];
let sum = calculateSum(numbersToSum);
console.log("Sum:", sum);

//Filter Array
function filterArray(arr, condition) {
    return arr.filter(element => condition(element));
}

// Testing
let numbersToFilter = [10, 20, 30, 40, 50];
let filteredArray = filterArray(numbersToFilter, element => element > 30);
console.log("Filtered Array:", filteredArray);



