

     // Assignment of javaScript


// Topic 1 to understand the scope in JS

// let and const are block level
// var is global level plz avoid to use it

let gVar = "Hi i am global";

function checkScope() {
    let lVar = "hi i am local";

    console.log(gVar);
    console.log(lVar);
}

checkScope();
console.log(gVar);
// console.log(lVar); // this give error bcz this local var.





//Topic 2 Functions and Template Literals in JS

// 1.
function normalfun(name) {
    return `Hello, ${name}!`;
}

console.log(normalfun("Manish"));



// 2.
const funExpression = function(name) {
    return `Hello, ${name}!`;
}
console.log(funExpression("akash"));
// 3.
// Arrow Function
const arrowfun = (name) => `Hello, ${name}!`;

console.log(arrowfun("rohit"));



// Topic 3 Advanced Function Features in js

// 1.
// b value pre decided..
function multi(a, b = 2) {
    return a * b;
}

console.log(multi(5)); 

// 2.
// Spread Operator
const nums = [1, 2, 3];
console.log(...nums);



// Topic 4  object in javaScript

console.log("object in js");

const user = {
    name:"manish",
    age: 23,
    mail:"mrmanish@w3villa.com",
    location:"noida",
    when: [ "Monday" , "Sunday" ]
}

console.table([ user.name , user.mail ]);
console.log(user["location"]);


// Topic 5 Object-Oriented Programming (OOP)

class Animal1{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const animal = new Animal1('Dog', 5);
animal.speak();

// There are many things in oops for learning still i am learning.
// like eg:- encapsulation, inheritance, polymorphism, and abstraction

// Topic 6 Asynchronous JavaScript
// 1.
// NOrmal flow of code.
function First() { 
    console.log("Hello");
  }
  
  function Second() {
    console.log("Manish");
  }
  
  First();
  Second();

//   2 way
function firstFunction() {
    console.log('First function is called');

    
}
function secondFunction() {
    console.log('Second function is called');
}


function thirdFunction() {
    console.log('Third function is called');
}


firstFunction();
setTimeout(secondFunction, 2000);
thirdFunction();
