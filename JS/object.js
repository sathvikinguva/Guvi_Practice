// const person = {};
// person["firstName"] = "Siddhartha";
// person["lastName"] = "verma";
// person.age = 24;
// person.designation = "fullstack developer";
// person.address = "Uttar Pradesh"
// console.log(person);

// const person1 = {firstName: "Siddartha", lastName: "Verma"};
// const person2 = {firstName: "Aditya", lastName: "Verma"};
// const personCollection = [person1, person2];
// console.log(personCollection);

// const school = new Object();
// school.name = "GD Public School";
// school.grade = "A+";
// school.address = "New delhi";
// console.log(school);

// const student = new Object();
// student.name = "Siddartha";
// student.percent = "78%";
// student.greet = function ()
//  {
//     return "Hello World";
//  };
const student = {
    name: 'Siddartha',
    percent: '78%',
    greet: function () {
        return this.name + " Hello World";
    },
};
console.log(student.greet());

// function Person(firstName, lName, age, contactNumber){
//     this.firstName = firstName;
//     this.lName = lName;
//     this.age = age;
//     this.contactNumber = contactNumber;
// }
// const p1 = Person("Siddartha", "Verma", 24, "9898989898");
// console.log(p1);