// var - function scope, re-assign possible, re-declare possible
var a = 1;
a = 2;
var a = 3;
var a;
console.log(a); // output -> 3
// let - block scope, re-assign possible, re-declare NOT possible
// const - block scope, re-assing NOT possible, re-declare NOT possible

// Anonymous function
const sum = function (a, b) {
  console.log(a + b);
};
sum(2, 4);

// --------------------------------------------------------

// IIFE - Immediately Invoked Function Expressions
(function greet() {
  console.log("Welcome to Jurassic Park");
})();

(function sum(a, b) {
  console.log(a + b);
})(2, 7);

// --------------------------------------------------------

function hello() {
  var firstName = "Virat";
  var city = "Delhi";

  const user = {
    firstName: "Rishab",
    city: "Roorkee",
    getName: () => {
      return this.firstName;
    },
    getCity: () => {
      return this.city;
    },
  };

  console.log(user.getName());
  console.log(user.getCity());
}

hello();

// --------------------------------------------------------

// Difference between regular functions and arrow functions
// 1. in terms of syntax - this is obvious, so no need of giving an example
// 2. in terms of 'this' keyword
// 3. in terms of 'arguments' keyword
const calculator = {
  fullName: "Virat Kohli",

  add: function (a, b) {
    console.log(this.fullName); // Virat Kohli
    console.log(arguments); // [2, 4, callee, Symbol]
    return a + b;
  },

  sub: (a, b) => {
    console.log(this.fullName); // undefined
    console.log(arguments); // error
    return a - b;
  },

  multiply(a, b) {
    console.log(this.fullName); // Virat Kohli
    console.log(arguments); // [3, 5, callee, Symbol]
    return a * b;
  },
};

console.log(calculator.add(2, 4));
// console.log(calculator.sub(6, 1));
console.log(calculator.multiply(3, 5));

// // 4. in terms of duplicate parameters
function add(a, a) {
  return a + a;
}
console.log(add(12, 45)); // output -> 90

const add = (a, a) => a + a;
console.log(add(12, 45)); // Duplicate parameter error

// // 5. in terms of 'constructor' functions
function add(a, b) {
  console.log(a + b);
}
new add(12, 20); // output - 32

const add = (a, b) => console.log(a + b);
new add(12, 20); // TypeError - add not a constructor

// --------------------------------------------------------

// Generator functions
function* calculator(a, b) {
  yield a + b;
  yield a - b;
  yield a * b;
  yield a / b;
  yield a % b;
}

console.log(calculator(10, 2));
const values = calculator(10, 2);
console.log(values);

console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());

// --------------------------------------------------------

function outer() {
  var a = 10;
  var firstName = "Sachin";
  function middle() {
    var b = 20;
    var firstName = "Rahul";
    function inner() {
      var c = 30;
      var firstName = "Sourav";

      var person = {
        firstName: "Virat",
        city: "Delhi",
        about: function () {
          return `I am ${this.firstName} and I live in the city of ${this.city}!`;
        },
      };
      console.log(person.about());
    }
    inner();
  }
  middle();
}

outer();
