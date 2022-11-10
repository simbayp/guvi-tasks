const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myString = "I am the best.";
const myPalindromeArray = [4830, "madam", "jute", 3993, "racecar", 100];

// ------------------------------ Task 1 ----------------------------------
// Do the below programs in Anonymous functions & IIFE

// a.) Print odd numbers in an array

// Anonymous function
const printOdd = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]); // output -> 1, 3, 5, 7, 9
    }
  }
};
printOdd(myArray);

// IIFE
(function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]); // output -> 1, 3, 5, 7, 9
    }
  }
})(myArray);

// b.) Convert all the strings to title caps in a string array

// Anonymous function
const allCaps = function (string) {
  console.log(string.toUpperCase()); // output -> I AM THE BEST.
};
allCaps(myString);

// IIFE
(function (string) {
  console.log(string.toUpperCase()); // output -> I AM THE BEST.
})(myString);

// c.) Sum of all numbers in an array

// Anonymous function
const sumOfArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum); // output -> 55
};
sumOfArray(myArray);

// IIFE
(function (array) {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum); // output -> 55
})(myArray);

// d.) Return all the prime numbers in an array

// Anonymous function
const allPrimes = function (array) {
  console.log(
    array.filter(function (number) {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0 || i === 1) return false;
      }
      return number > 1;
    })
  ); // output -> [2, 3, 5, 7]
};
allPrimes(myArray);

// IIFE
(function (array) {
  console.log(
    array.filter(function (number) {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0 || i === 1) return false;
      }
      return number > 1;
    })
  ); // output -> [2, 3, 5, 7]
})(myArray);

// e.) Return all the palindromes in an array

// Anonymous function
const allPalindromes = function (array) {
  console.log(
    array.filter(function (element) {
      const str = String(element);
      for (let k = 0; k < str.length; k++) {
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
          if (str[i] === str[j]) {
            i++;
            j--;
          } else {
            return false;
          }
        }
        return true;
      }
    })
  ); // output -> ["madam", 3993, "racecar"]
};
allPalindromes(myPalindromeArray);

// IIFE
(function (array) {
  console.log(
    array.filter(function (element) {
      const str = String(element);
      for (let k = 0; k < str.length; k++) {
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
          if (str[i] === str[j]) {
            i++;
            j--;
          } else {
            return false;
          }
        }
        return true;
      }
    })
  ); // output -> ["madam", 3993, "racecar"]
})(myPalindromeArray);

// ------------------------------ Task 2 ----------------------------------
// Do the below programs in Arrow functions

// a.) Print odd numbers in an array

// Arrow function
const printOddArrow = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]); // output -> 1, 3, 5, 7, 9
    }
  }
};
printOddArrow(myArray);

// b.) Convert all the strings to title caps in a string array

// Arrow function
const allCapsArrow = (string) => {
  console.log(string.toUpperCase()); // output -> I AM THE BEST.
};
allCapsArrow(myString);

// c.) Sum of all numbers in an array

// Arrow function
const sumOfArrayArrow = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum); // output -> 55
};
sumOfArrayArrow(myArray);

// d.) Return all the prime numbers in an array

// Arrow function
const allPrimesArrow = (array) => {
  console.log(
    array.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0 || i === 1) return false;
      }
      return number > 1;
    })
  ); // output -> [2, 3, 5, 7]
};
allPrimesArrow(myArray);

// e.) Return all the palindromes in an array

// Arrow function
const allPalindromesArrow = (array) => {
  console.log(
    array.filter((element) => {
      const str = String(element);
      for (let k = 0; k < str.length; k++) {
        let i = 0;
        let j = str.length - 1;
        while (i < j) {
          if (str[i] === str[j]) {
            i++;
            j--;
          } else {
            return false;
          }
        }
        return true;
      }
    })
  ); // output -> ["madam", 3993, "racecar"]
};
allPalindromesArrow(myPalindromeArray);
