var fullName = "Siddhartha Verma";

function greet(){
    var fullName = "Siddhartha 123";
    var age = 24;
    console.log(age);
    console.log(fullName);
}

function greet2(){
    fullName = "Siddhartha Kumar";
    console.log(fullName);
    console.log(age);
}

// greet();
// greet2();
// greet();

function num1(number1){
    const result = number1 * 2;
    function num2(){
        return result * 3;
    };
    const resp = num2();
    console.log(resp);
}
const response = num1(10);
console.log(response);