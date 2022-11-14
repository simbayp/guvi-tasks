// const arr = ["vivek", "duck", "book", "orange", "boys", "airplane"];
// const arr4 = arr.filter((ele) => ele.length === 4);
// console.log(arr4);

// const obj = [
//   { name: "vivek", age: 12, city: "Lucknow" },
//   { name: "virat", age: 34, city: "Delhi" },
//   { name: "rohit", age: 36, city: "mumbai" },
// ];
// const above18 = obj.filter((ele) => ele.age >= 18);
// console.log(above18);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const sum = nums.reduce((acc, num, index, arr) => {
//   console.log(acc, num, index, arr);
//   return acc + num;
// });
// console.log(sum);

const nums1 = [2, 0, 4, 5, 2, 1, 0, 2, 1, 3, 1, 4, 5, 3, 3, 5, 17, 17];
let count = {};

nums1.forEach((num) => {
  if (Object.keys(count).includes(String(num))) {
    count[num]++;
  } else {
    count[num] = 1;
  }
});

console.log(count);
