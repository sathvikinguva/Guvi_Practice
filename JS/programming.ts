/*
1. Variable Declaration
*/
let employeeName!: String; // declaration
employeeName = 'Siddhartha';// intialization
employeeName = 'Aditya'; // re-assignment
var employeeSalary!: number; // declaration
employeeSalary = 9000; // intialization
employeeSalary = 12000; // re-assignment
const employeeGrade: String = 'A+';

/*
2. Basic Syntax
*/
type Gender = 'male' | 'female' | 'other';
interface Person{
    firstName: string;
    lastName: string;
    contactNumber: number;
    isMarried: boolean;
    address: Address;
    gender: Gender;
}
interface Address {
        address1: string;
        address2: string;
        pincode: number;
        country: string;
}
const p1: Person = {
    firstName: 'Siddhartha',
    lastName: 'Verma',
    contactNumber: 9898989898,
    isMarried: false,
    address: {
        address1: 'New delhi',
        address2: 'Rohini',
        pincode: 112233,
        country: 'IND'
    },
    gender: 'male'
};
/*
3. Datatypes and Structures
*/
type Transmission = 'petrol' | 'diesel' | 'cng' | 'electric' | 'hybrid';
class Car {
    public color!: string;
    public transmission!: Transmission;
    public price!: number;
    public brand!: string;
    constructor(color: string, transmission: Transmission, price: number, brand: string){
        this.color = color;
        this.transmission = transmission;
        this.price = price;
        this.brand = brand;
    }
}
const car1: Car = new Car('red', 'petrol', 2500000, 'Audi');

const age: number = 24;

// if(age > 18){
//     console.log('You are valid for driving');
// } else {
//     console.log('You are too young for driving');
// }

const res = age > 18 ? 'You are valid for driving' : 'You are too young for driving';
// console.log(res);

/*
4. Flow Control Structures (Conditional And Loops)
i. For Loop
ii. While Loop
iii. Do while Loop
iv. ForEach Loop
*/
// 1. For Loop
console.log("For Loop");
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// 2. While Loop
console.log("While Loop");
let j = 1;
while (j <= 3) {
  console.log(j);
  j++;
}

// 3. Do While Loop
console.log("Do While Loop");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 3);

// 4. ForEach Loop
console.log("ForEach Loop");
let numbers = [1, 2, 3];
numbers.forEach(function(num) {
  console.log(num);
});