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
