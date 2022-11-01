// ---------------------------- Task 1 --------------------------------
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

function checkSameObjects(object1, object2) {
  var object1keys = Object.keys(object1);
  var object1values = Object.values(object1);

  var object2keys = Object.keys(object2);
  var object2values = Object.values(object2);

  if (object1keys.length !== object2keys.length) {
    return false;
  } else {
    for (let i = 0; object1keys.length; i++) {
      if (
        object2keys.includes(object1keys[i]) &&
        object2values.includes(object1values[i])
      ) {
        return true;
      }
      return false;
    }
  }
}

console.log(checkSameObjects(obj1, obj2));

// ---------------------------- Task 2 --------------------------------
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

// onload function fires when the readystate has a value 4, so we don't need to check readystate separately
xhr.onload = function () {
  var data = JSON.parse(xhr.response); // data will be an array of all countries
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name, data[i].flag); // Flags of all countries - click on any URL and the flag will open in a new tab
  }
};

// ---------------------------- Task 3 --------------------------------
const xhr2 = new XMLHttpRequest();

xhr2.open("GET", "https://restcountries.com/v2/all");
xhr2.send();

// onload function fires when the readystate has a value 4, so we don't need to check readystate separately
xhr2.onload = function () {
  var data2 = JSON.parse(xhr2.response); // data will be an array of all countries
  for (let i = 0; i < data2.length; i++) {
    console.table(`
      country name: ${data2[i].name},
      subregion: ${data2[i].subregion},
      region: ${data2[i].region},
      population: ${data2[i].population}`); // Flags of all countries - click on any URL and the flag will open in a new tab
  }
};
