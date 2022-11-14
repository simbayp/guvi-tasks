// ------------------------------ Task 1 ----------------------------------
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// class Movie {
//   constructor(title, studio, rating) {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
// }

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// class Movie {
//   constructor(title, studio, rating = "PG") {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
// }

// c) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

const CasinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(CasinoRoyale); // output -> Movie {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}

// ------------------------------ Task 2 ----------------------------------
// Convert the UML diagram to JavaScript class.

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  getColor() {
    return this.color;
  }
  toString() {
    return `Circle[radius=${this.radius}, color=${this.color}]`;
  }
  getArea() {
    return 3.14159 * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * 3.14159 * this.radius;
  }
}

const circleOne = new Circle(5, "blue");
console.log(circleOne.getArea()); // output -> 78.53975

// ------------------------------ Task 3 ----------------------------------
// Write a “person” class to hold all the details.

class Person {
  constructor(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getAge() {
    return `${this.fullName()} is ${this.age} years old.`;
  }
  getCity() {
    return `${this.fullName()} lives in ${this.city}.`;
  }
}

const virat = new Person("Virat", "Kohli", 34, "Delhi");
console.log(virat.getAge()); // output -> Virat Kohli is 34 years old.
