// const carBrands = ["BMW", "Audi", "Jaguar"];
// carBrands[2] = "Honda";
// console.log(carBrands[0]);
// console.log(carBrands[1]);
// console.log(carBrands[2]);

// carBrands.forEach((item, index)=> {
//     if(item === "Jaguar") {
//         carBrands[index] = "Honda";
//     }
// });
// console.log(carBrands);

// const movies = new Array("Audi", "Honda", "Kia");
// const age = new Array(12, 22, 43);
// const mixedItems = new Array(movies, age, ["Ram", 22, ["1", "2"]]);
// movies[0] = '';
// movies[1] = "";
// movies[2] = "";
// movies[3] = "";
// movies[4] = "";
// movies[5] = "";
// movies[6] = "";
// movies[7] = "";
// movies[8] = "";
// movies[9] = "";
// console.log(mixedItems);

// const fruits = ["Orange", "Apple", "Kiwi", "Mango"];
// console.log(fruits);
// fruits.sort();
// fruits.reverse();
// console.log(fruits);
// const axis = [22.2, 12.9, 1, 4, 100.45];
// axis.sort(function (a, b){
//     console.log(a, b, a - b);
//     return b - a;
// });
// console.log(axis);

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// console.log(num1.concat(num2));

//Splicing and Slicing
// splice() => add new items
// slice() => slice out a piece of an array

const numbers = [1, 2, 3, 43, 5];
// numbers.splice(3, 2, 6, 7, 8);
// numbers.splice(1, 1);
const z = numbers.slice(0, 6);
console.log(z);