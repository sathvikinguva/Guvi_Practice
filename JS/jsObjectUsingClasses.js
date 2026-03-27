function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const p1 = new Person("Siddhartha", "Verma");
const p2 = new Person("Additya", "Verma");

console.log(p1);
console.log(p2);
console.log(p2.fullName());