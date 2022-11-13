// Prototypes

let user = { name: "Vivek", country: "India" };
// console.log(Object.prototype); // Class has .prototype property
// console.log(user.__proto__); // Instance has .__proto__ property which it gets from the .prototype of the type which it is from.

// console.log(Object.prototype === user.__proto__); // output -> true

// We can add some of our own properties to .prototype and use it in any one of its instance
// Object.prototype.example = function () {
//   return "example";
// };
// console.log(user.example());

// The same thing we can do with .__proto__ and add some of our own properties to it
// user.__proto__.anotherExample = function () {
//   return "another example";
// };
// console.log(user.anotherExample());

// Prototype chaining

// // Object -
// const obj = { name: "Vivek", country: "India" };
// console.log(obj.__proto__); // Object prototype
// console.log(obj.__proto__.__proto__); // null

// // Array -
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.__proto__); // Array prototype
// console.log(arr.__proto__.__proto__); // Object prototype
// console.log(arr.__proto__.__proto__.__proto__); // null

// // String -
// const str = "I am the best";
// console.log(str.__proto__); // String prototype
// console.log(str.__proto__.__proto__); // Object prototype
// console.log(str.__proto__.__proto__.__proto__); // null

// // Number -
// const num = 12;
// console.log(num.__proto__); // Number prototype
// console.log(num.__proto__.__proto__); // Object prototype
// console.log(num.__proto__.__proto__.__proto__); // null

// // Boolean -
// const active = true;
// console.log(active.__proto__); // Boolean prototype
// console.log(active.__proto__.__proto__); // Object prototype
// console.log(active.__proto__.__proto__.__proto__); // null

// // Function -
// const greet = _ => "Hello Vivek";
// console.log(greet.__proto__); // Function prototype
// console.log(greet.__proto__.__proto__); // Object prototype
// console.log(greet.__proto__.__proto__.__proto__); // null

// OOPs

// Class

// class Student {
//   getName() {
//     return this.name;
//   }
//   getAge() {
//     return this.age;
//   }
// }

// const vivek = new Student();
// console.log(vivek.__proto__); // Student prototype
// console.log(vivek.__proto__.__proto__); // Object prototype
// console.log(vivek.__proto__.__proto__.__proto__); // null
// vivek.name = "awesome";
// console.log(vivek);

// Constructor

// * Important NOTE *
// If we don't have a constructor in our Sub class then the Super class constructor will be automatically called, but if we have a constructor in our Sub class then the Super class constructor can only be called by using 'super' keyword

// Parent, Base, Super
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Child, Derived, Sub
class Student extends User {
  constructor(firstName, lastName, batch, language) {
    // all the above parameters will now be available as property name inside Student class
    // this.firstName = firstName;
    // this.lastName = lastName;
    super(firstName, lastName); // If we inherit from User class then we need to send these parameters back to User class for initialisation using 'super' keyword
    this.batch = batch;
    this.language = language;
  }
  // since we inherited from User we don't need getFullName() inside Student
  // getFullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
  getFullBatchName() {
    return `${this.batch}-${this.language}`;
  }
}
console.log(Student.prototype); // Student prototype
const student = new Student(); // Instance of a Student class without giving any arguments
console.log(student);

// without constructor parameters we need to initialize all the properties individually
// student1.firstName = "Guvi 1";
// student1.lastName = "Zen 1";
// student1.batch = "Zen 1";
// student1.language = "English";

const student1 = new Student("Guvi 1", "Zen 1", "Zen 1", "English");
console.log(student1);
console.log(student1.getFullName());
console.log(student1.getFullBatchName());

// without constructor parameters we need to initialize all the properties individually
// student2.firstName = "Guvi 2";
// student2.lastName = "Zen 2";
// student2.batch = "Zen 2";
// student2.language = "Hindi";

const student2 = new Student("Guvi 2", "Zen 2", "Zen 2", "Hindi");
console.log(student2.getFullName());
console.log(student2.getFullBatchName());

// without constructor parameters we need to initialize all the properties individually
// student3.firstName = "Guvi 3";
// student3.lastName = "Zen 3";
// student3.batch = "Zen 3";
// student3.language = "Bhojpuri";

const student3 = new Student("Guvi 3", "Zen 3", "Zen 3", "Bhojpuri");
console.log(student3.getFullName());
console.log(student3.getFullBatchName());

// Child, Derived, Sub
class Mentor extends User {
  constructor(firstName, lastName, subject) {
    // all the above parameters will now be available as property name inside Mentor class
    // this.firstName = firstName;
    // this.lastName = lastName;
    super(firstName, lastName); // If we inherit from User class then we need to send these parameters back to User class for initialisation using 'super' keyword
    this.subject = subject;
  }
  // since we inherited from User we don't need getFullName() inside Mentor
  // getFullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
  getSubject() {
    return this.subject;
  }
}

const mentor1 = new Mentor("Vikas", "Agarwal", "Physics");
console.log(mentor1);

// Getters and Setters

const obj = {
  firstName: "Virat",
  lastName: "Kohli",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  age(age) {
    this.age = age;
  },
};
console.log(obj);
console.log(obj.fullName());
obj.age(23);
console.log(obj);

// Getters - to transform a method to property
const obj1 = {
  firstName: "Surya",
  lastName: "Kumar",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(obj1);
console.log(obj1.fullName);

// Setters - to change a property or method from outside
const obj2 = {
  firstName: "Rohit",
  lastName: "Sharma",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(obj2);
