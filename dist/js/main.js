//Log a statement using console.log
//console.log('Hello guys form main.js')

//--------Variables----------
/*
//Value can be change
let age = 22;
console.log(age);

//Value is constant or connot be change
const salary = 15000;
console.log(salary);

let sum = 5;
sum = sum + age;
console.log(sum);
    */

/*
----------DATA TYPES--------------
PREMITIVE DATA TYPES -Written as an actual value
-String
-Number
-Boolean
-Undefined
-Null
- BigInt
-Symbol

NON PREMITIVE DATA TYPES - Collection of values
-Objects
*/
/*
//String
const name = 'Carl';
let lastname = 'Manigos';
console.log(name, lastname);

//Number
const age = 17;
console.log(age);

//Boolean
let isLegalAge;
if (age >= 18) {
    isLegalAge = true;
} else {
    isLegalAge = false;
}
console.log(isLegalAge);

//Undefined
let result;
console.log(result);

const res = undefined;

//Null
const data = null;

//OBJECTS
const person = {
    firstname: 'Carl John',
    lastname: 'Manigos',
    age: 22,
    address: 'LLC',
};

console.log(person.firstname, person.lastname);
console.log(person.firstname);
console.log(person);

//ARRAYS
const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers);
console.log(oddNumbers[1]);
*/

/*    

--------OPERATORS---------
    -Assigment Operators
    -Arithmetic Operators
    - Comparison Operators
    -Logical Operators
    -String Operators
    -Other

//Assigment Operators
let x = 10;
let y = 5;

//Arithmetic Operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(++x);
console.log(--y);

//Comparison Operators
// == - compare the value
// === - compare the data types and values
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);

//Logical Operators
const isValidNumber = x > 8 && 8 > y;
console.log(isValidNumber);

const isValidNumbers = x > 20 || 8 > y;
console.log(isValidNumbers);

const isValid = true;
console.log(!isValid);

//String Operators

console.log('Carl ' + 'John');

const isEven = 10 % 2 === 0 ? true : false;
console.log(isEven);

const isEvens = 10 % 2 === 0 ? 'The number is even' : 'The number is odd';
console.log(isEvens);

*/

/* 
---------TYPE OF CONVERTIONS--------
    -Implicit Conversion
    -Explicit Conversion


//Implicit
console.log(4 + '3');
console.log(4 - '3');
console.log('Bruce' - 'Wayne');
console.log('5' - true);
console.log('5' - null);

//Explicit
console.log(Number('5'));
console.log(parseInt('5'));
console.log(parseFloat('5.14'));
console.log(String(500));
console.log((500).toString());
console.log(Boolean(10)); // null undefined 0 '' Nan - will return
console.log(Boolean(null));

*/

/*
-----------EQUALITY---------
    ==(Allows coercion)
    ===(Does not allow coercion) 

    Use === for more safe comparison

    Coercion - Type coercion is the automatic or implicit conversion of values from one data type to another. For example, converting a string value to an equivalent number value. It is also known as type conversion.



const var1 = 'test';
const var2 = 'test';

console.log(var1 == var2);
console.log(var1 === var2);

const var3 = 10;
const var4 = '10';

console.log(var3 == var4); // double = Javascript automatically coverts var4 to numeric
console.log(var3 === var4); //triple = Will not convert automatically(More Strict)

*/

/*
-----CONDITIONAL STATEMENTS------
    -if
    -else
    -else if
    -switch


const num = 0;

if (num > 0) {
    console.log('Number is positive');
} else if (num === 0) {
    console.log('Number is zero');
} else {
    console.log('Number is not negative');
}

const color = 'yellow';

switch (color) {
    case 'red':
        console.log('Color is read');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    case 'yellow':
        console.log('Color is yellow');
        break;
    default:
        console.log('Cant find the color');
        break;
}

*/

/*
-------LOOPING CODE-----------
    -for - for(initializer; condition; final-expression) { //code to run}
    -while - initializer while(condition){ //code to run  final-expression}
    -do..while initializer do { //code to run  final-expression} while(condition)
    -for..of  for(const item of array){ //code to run}


//For loop

//for (let i = 1; i <= 5; i++) {
//    console.log('Iteration number ' + i);
//}

//While Loop

// let j = 1;
// while (j <= 5) {
//     console.log('Iteration number ' + j);
//     j++;
// }

//Do..While

// let t = 5;
// do {
//     console.log('Iteration number ' + t);
//     t++;
// } while (t <= 5);

//For..of Loop

// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//     console.log('Iteration number ' + num);
// }

*/

/* 
--------FUNCTIONS--------
A JavaScript function is a block of code designed to perform a particular task
Ex: Add to numbers, multiply two numbers etc
Functions are reusable as they can be defined once and can be called with different values resulting in different results.

Syntax : 

        function name(parameter1, parameter2, parameter3)
        {
            //Code to be executed
        }
function greet(username) {
    //username is fucntion parameter
    console.log('Good evening ' + username);
}
greet('CJ'); // 'CJ' is function argument

function add(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
};

const addFive = (num) => num + 5;

const sum = add(50, 10);
console.log(sum);

const arrowSum1 = arrowSum(50, 50);
console.log(arrowSum1);

*/

/*
----------SCOPE-------

    -Block scope
    -Function scope
    -Global scope


//Block scope - Variables declared inside the curly braces connot be accessible outside the block.
// if (true) {
//     const myName = 'Carl';
// }
// console.log(myName);

//Function scope - Variables declade inside the fucntion connot be accessible outside the function.

const myNum = 100;
const myName = 'Carl'; //Global scope will not overwrite the fucntion or block variables
function testFn() {
    const myName = 'Superman';
    console.log(myName);
    console.log(myNum);
}
testFn();

//Global scope - The global scope outside the block and function. Global scope is accessible inside the block and function.

*/
