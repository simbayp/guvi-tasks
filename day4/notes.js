// GET
// const http = new XMLHttpRequest();

// // open the request
// http.open("GET", "https://www.melivecode.com/api/users");
// // send the request
// http.send();
// // console.log(http.responseText());
// setTimeout(function () {
//   console.log(http.responseText);
// }, 5000);

// console.log("Vivek");

// Ready States
// 0 - Unsent - Client has been created; open() not called yet
// 1 - Open - open() has been called - Server Connected
// 2 - Headers_Received - send() has been called; headers and status are available - Request Received
// 3 - Loading - Downloading; responseText holds partial data - Request in progress
// 4 - Done - The operation is complete - Request Finished

// Closures
function greet() {
  var appName = "Vivek";
  console.log("Awesome");

  return function () {
    console.log(appName);
  };
}

// console.log(appName);

// greet();
const newGreet = greet();
// console.log(newGreet);
newGreet();

// function init() {
//   var string = "Mozilla";

//   function inner() {
//     console.log(string);
//   }

//   inner();
// }

// init();
