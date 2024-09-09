console.log("--------Exersise1----------");
let numbers = [1, 5, 3, 8, 2,4,6,7,9,10];

numbers.sort((a, b) => a - b);
console.log("Sorted array:", numbers); 

let squares = numbers.map(num => num * num);
console.log("Array of squares:", squares); 

let firstnumber = numbers.find(num => num > 25);
console.log("First number greater than 25:", firstnumber); 

let allGreaterThan5 = numbers.every(num => num > 5);
console.log("All numbers greater than 5:", allGreaterThan5); 

let containsThree = numbers.includes(3);
console.log("Array contains Number 3:", containsThree); 

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); 

let middleIndex = Math.floor(numbers.length / 2);
numbers.splice(middleIndex - 1, 2);
console.log("Array after removing middle elements:", numbers); 

let multiplication = numbers.reduce((acc, num) => acc * num, 1);
console.log("multiplication of all numbers:", multiplication); 

let GreaterThan5 = numbers.findIndex(num => num > 5);
console.log("Index of the first number greater than 5 is:", GreaterThan5); 

let lastElement = numbers.pop();
console.log("Last element removed:", lastElement); 

numbers.push(100);
console.log("Array after adding 100:", numbers); 


console.log("--------Exersise2----------");
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

let namesWithAString = names.filter(name => name.toLowerCase().includes('a')).join('-');
console.log("Names containing 'a':", namesWithAString); 


console.log("--------Exersise3----------");
let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];

let NameStartingWithB = fruits.some(fruit => fruit.startsWith('b'));
console.log("Contains name starting with 'b':", NameStartingWithB); 
let slicedFruits = fruits.slice(1, 4);
console.log("Sliced array:", slicedFruits);
slicedFruits.unshift('yellow');
console.log("Array after adding yellow", slicedFruits);


console.log("--------Exersise4----------");
let words = ['hello', 'world','javascript', 'array', 'function'];

let wordLengths = words.map(word => word.length);
console.log("Lengths of each word:", wordLengths); 
let index = words.indexOf('javascript');
if (index !== -1) {
    console.log("Found 'javascript' at index:", index); 
} else {
    console.log("'javascript' is not found");
}



console.log("==========================================");
console.log("Function Lab1 Introduction");
console.log("==========================================");

console.log("----- Sum ------");
function sum(num1,num2){
    return num1+num2
}
console.log(sum(3,2));

console.log("-----  Subtraction ------");
function Subtraction(num1,num2){
    return num1-num2
}
console.log(Subtraction(3,2));

console.log("-----  Division ------");
function Division(num1,num2){
    return num1/num2
}
console.log(Division(3,2));

console.log("-----  Multiplication ------");
function Multiplication(num1,num2){
    return num1*num2
}
console.log(Multiplication(3,2));

console.log("-----  module ------");
function module(num1,num2){
    return num1%num2
}
console.log(module(3,2));




















