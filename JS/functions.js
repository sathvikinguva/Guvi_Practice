function greetCustomer(customerName = "Customer"){
    console.log("Hello " + customerName);
}

greetCustomer();
greetCustomer("Tom 1");
greetCustomer("Tom 2");
greetCustomer("Tom 3");
greetCustomer("Tom 4");

function checkForValidAge(age){
    return age > 18 ? true : false;
}

var person1 = checkForValidAge(14);
console.log(person1);
var person2 = checkForValidAge(21);
console.log(person2);

// Anonymous Function

var test = function (marks){
    return marks % 2 === 0 ? "Passed" : "Failed";
};
console.log(test(101));

// ES6 Arrow Functions
// function printFullName(fname, lname){
//     console.log(fname + " " + lname);
// }
// printFullName("Siddhartha", "Verma");

const printFullName = (fname, lname) => console.log(fname + " " + lname);
printFullName("Siddhartha", "Verma");


function provideNumber1(number1){
    return function provideNumber2(number2) {
        return parseInt(number1) + parseInt(number2);
    };
}
const res = provideNumber1(10);
const finalres = res(20);
console.log(finalres);