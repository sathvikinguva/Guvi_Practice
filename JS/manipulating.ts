// Manipulating Data With Arrays And String Functions
// Example - 1
const fruits = ['Mango', 'Apple', 'Kiwi', 'Banana'];

const ages = [{emp: 'Sidd', age: 24}, {emp: 'Aadi', age: 23}];

// map => transforming the data
const age_map = ages.map((ea: {emp: string, age: number}) => {
  return {
    emp_details: ea.emp + "'s age is: " + ea.age
  };
});

age_map.forEach(a => console.log(a.emp_details));

// Example - 2
const marks = [
  {
    subject: 'English',
    marks: 50
  },
  {
    subject: 'Hindi',
    marks: 70
  },
  {
    subject: 'Science',
    marks: 75
  }
];

const result = marks.reduce(function (totalMarks, initialMark) {
  return totalMarks + initialMark.marks;
}, 0);

console.log(result);

// Example - 3
const firstName = 'Siddhartha';
const lastName = 'Verma';

// console.log(`${firstName}_${lastName}`);

const res1 = firstName.replace('dd', 'ee');
// console.log(res1);

const res2 = firstName.concat('111111');
// console.log(res2);

const greetings = 'Hello  World  ';
// console.log(greetings.trim());

const specialKey = 'COUNTRY_0';
console.log(specialKey.split('_')[0]);