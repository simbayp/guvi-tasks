const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

xhr.onload = function () {
  var data = JSON.parse(xhr.response);
  console.log(data); // output -> An array of all the 250 countries
};

// ------------------------------ Task 1 ----------------------------------
// Get all the countries from the Asia continent /region using the Filter function

const xhr1 = new XMLHttpRequest();

xhr1.open("GET", "https://restcountries.com/v2/all");
xhr1.send();

xhr1.onload = function () {
  var data = JSON.parse(xhr1.response);
  var asianCountries = data.filter((country) => country.region === "Asia");
  console.log(asianCountries); // output -> All 50 Asian countries in an array
};

// ------------------------------ Task 2 ----------------------------------
// Get all the countries with a population of less than 2 lakhs using Filter function

const xhr2 = new XMLHttpRequest();

xhr2.open("GET", "https://restcountries.com/v2/all");
xhr2.send();

xhr2.onload = function () {
  var data = JSON.parse(xhr2.response);
  var lessThanTwoLakhPopulation = data.filter(
    (country) => country.population < 200000
  );
  console.log(lessThanTwoLakhPopulation); // output -> All the 62 countries with population less than 2 lakh
};

// ------------------------------ Task 3 ----------------------------------
// Print the following details name, capital, flag using forEach function

const xhr3 = new XMLHttpRequest();

xhr3.open("GET", "https://restcountries.com/v2/all");
xhr3.send();

xhr3.onload = function () {
  var data = JSON.parse(xhr3.response);
  var array = [];
  data.forEach((country) => {
    var obj = {
      name: country.name,
      capital: country.capital,
      flag: country.flag,
    };
    array.push(obj);
  });
  console.log(array); // output -> An array of all the 250 countries with name, capital and flag
};

// ------------------------------ Task 4 ----------------------------------
// Print the total population of countries using reduce function

const xhr4 = new XMLHttpRequest();

xhr4.open("GET", "https://restcountries.com/v2/all");
xhr4.send();

xhr4.onload = function () {
  var data = JSON.parse(xhr4.response);
  var populationData = data.map((country) => country.population);
  var totalPopulation = populationData.reduce((acc, next) => acc + next);
  console.log(totalPopulation); // output -> 7759438109 which is the total world population
};

// ------------------------------ Task 5 ----------------------------------
// Print the country which uses US Dollars as currency.

const xhr5 = new XMLHttpRequest();

xhr5.open("GET", "https://restcountries.com/v2/all");
xhr5.send();

xhr5.onload = function () {
  var data = JSON.parse(xhr5.response);
  var usCurrencies = data.filter((country) => {
    if (country.currencies !== undefined) {
      for (let i = 0; i < country.currencies.length; i++) {
        if (country.currencies[i].name === "United States dollar") {
          return true;
        }
      }
    } else {
      return false;
    }
  });
  usCurrencies.map((country) => console.log(country.name)); // output -> All 16 countries which uses US Dollars as currency
};

// output ->
// Bonaire, Sint Eustatius and Saba
// British Indian Ocean Territory
// Virgin Islands (British)
// Virgin Islands (U.S.)
// Cambodia
// Ecuador
// El Salvador
// Guam
// Marshall Islands
// Micronesia (Federated States of)
// Northern Mariana Islands
// Palau
// Panama
// Puerto Rico
// Turks and Caicos Islands
// United States of America
