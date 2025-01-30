console.log("functions.js file");

let firstName = "Michael";
let lastName = "Scott";
console.log("Hello " + firstName + " " + lastName + ", welcome to the JavaScript world!");

console.log(`Hello ${firstName} ${lastName} ${1+1}, welcome to the JavaScript world!`);

// Function declaration
function sayHello(){
    console.log("Hello Cohort 55");
}

// Call the function
sayHello();
sayHello();

// Example 2, with 1 parameter
function greet(name){
    console.log(`Hello ${name}, welcome!`);
}

greet("James");
greet("Joseph");

// Example 3, with 2 parameters
function greetTwo(nameOne, nameTwo){
    console.log(`Hello ${nameOne} and ${nameTwo}, welcome to your JS course!`);
}

greetTwo("Roland", "Joseph");
greetTwo("Koiree", "Edward");
greetTwo("Leo", "Nar");

// Example 4 with prompt
function sayMyName(){
    firstName = prompt("What is your first name?");
    lastName = prompt("What is your last name?");
    age = prompt("How many years old are you?");
    console.log(`Your name is ${firstName} ${lastName}. You are ${age} years old.`);
}

sayMyName();

// Example 5 with numbers
function add(num1=0, num2=0){
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);
    document.write(`The sum of ${num1} and ${num2} is ${num1 + num2}. <br> `);
}

add(10,2);
add(57.6,38.4);
add(1183.5, 2353.5);
add(55,1);
add();

/* Challenge 1: Double the Number
Create a function called doubleNumber that takes one number as a parameter.
The function should return the number multiplied by 2.
Print the result when you call the function with different numbers.
*/
function doubleNumber(singleNum=0){
    doubleNum = singleNum * 2;
    console.log(doubleNum);
    document.write(`${singleNum} doubled is ${doubleNum}.<br>`);
}

doubleNumber(2);

/* Challenge 2: Combine Names
Create a function called combineNames that takes two parameters: firstName and lastName .
The function should return the full name in the format: "firstName lastName" .
If either parameter is missing, it should use the default value "Unknown" for that parameter.
*/
function combineNames(firstName="Unknown", lastName="Unknown"){
    console.log(`${firstName} ${lastName}`);
    document.write(`Hello ${firstName} ${lastName}.<br>`);
}

combineNames();
combineNames("James");
combineNames("James", "Wright");

// Button click event
function login(){
    alert("You have successfully logged in!");
    console.log("executed login function");
}