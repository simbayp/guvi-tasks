function compute(num1, num2, callback) {
  return callback(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

function stringHandler(str, callback) {
  return callback(str);
}

function makeUpperCase(str) {
  return str.toUpperCase();
}

function reverseString(str) {
  let splitString = str.split("");

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("");

  return joinArray;
}
