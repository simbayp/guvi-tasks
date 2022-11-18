// ------------------------------ Task 1 ----------------------------------
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie1 {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie2 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

// c) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie3 {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getTitle() {
    return `Title of the movie is ${this.title}.`;
  }
  getStudio() {
    return `Name of the studio which produced this movie is ${this.studio}.`;
  }
  getRating() {
    return `This movie is rated ${this.rating}.`;
  }
}

const CasinoRoyale = new Movie3("Casino Royale", "Eon Productions", "PG13");
console.log(CasinoRoyale);
console.log(CasinoRoyale.getTitle());
console.log(CasinoRoyale.getStudio());
console.log(CasinoRoyale.getRating());

// output ->
// Movie3 {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}
// task.js:49 Title of the movie is Casino Royale.
// task.js:50 Name of the studio which produced this movie is Eon Productions.
// task.js:51 This movie is rated PG13.

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
console.log(circleOne.getRadius());
console.log(circleOne.getColor());
console.log(circleOne.toString());
console.log(circleOne.getArea());
console.log(circleOne.getCircumference());

// output ->
// 5
// blue
// Circle[radius=5, color=blue]
// 78.53975
// 31.4159

// ------------------------------ Task 3 ----------------------------------
// Write a “person” class to hold all the details.

class Person {
  constructor(
    firstName,
    lastName,
    fatherName,
    email,
    phone,
    sex,
    age,
    city,
    aadhar
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fatherName = fatherName;
    this.email = email;
    this.phone = phone;
    this.sex = sex;
    this.age = age;
    this.city = city;
    this.aadhar = aadhar;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getFatherName() {
    return `${this.fullName()}'s name is ${this.fatherName}.`;
  }
  getEmail() {
    return `The Email is: ${this.email}`;
  }
  getPhone() {
    return `The Phone Number is: ${this.phone}`;
  }
  getSex() {
    return `${this.fullName()} is a ${this.sex}`;
  }
  getAge() {
    return `${this.fullName()} is ${this.age} years old.`;
  }
  getCity() {
    return `${this.fullName()} lives in ${this.city}.`;
  }
  getAadhar() {
    return `The Aadhar Number is: ${this.aadhar}`;
  }
}

const virat = new Person(
  "Virat",
  "Kohli",
  "Prem Kohli",
  "viratkohli@email.com",
  9898989898,
  "Male",
  34,
  "Delhi",
  595959595959
);
console.log(virat.fullName());
console.log(virat.getFatherName());
console.log(virat.getEmail());
console.log(virat.getPhone());
console.log(virat.getSex());
console.log(virat.getAge());
console.log(virat.getCity());
console.log(virat.getAadhar());

// output ->
// Virat Kohli
// Virat Kohli's name is Prem Kohli.
// The Email is: viratkohli@email.com
// The Phone Number is: 9898989898
// Virat Kohli is a Male
// Virat Kohli is 34 years old.
// Virat Kohli lives in Delhi.
// The Aadhar Number is: 595959595959

// ------------------------------ Task 4 ----------------------------------
// Write a class to calculate the uber price.

class UberPriceCal {
  constructor(baseFare, rideDistance, bookingFee) {
    this.baseFare = baseFare;
    this.rideDistance = rideDistance;
    this.bookingFee = bookingFee;
  }
  setPrice(newBaseFare, newRideDistance, newBookingFee) {
    this.baseFare = newBaseFare;
    this.rideDistance = newRideDistance;
    this.bookingFee = newBookingFee;
  }
  getPrice() {
    return `Price for the ride is: ${
      this.baseFare * this.rideDistance + this.bookingFee
    }`;
  }
}

let ride = new UberPriceCal();
ride.setPrice(5, 30, 20);
console.log(ride.getPrice());

// output ->
// Price for the ride is: 170
