// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter((item) => item % 2 === 0);
// console.log(even);

// const students = [
//     {name: "Sidd", age: 24},
//     {name: "Aditya", age: 18},
//     {name: "Raj", age: 17},
//     {name: "Tina", age: 22},
// ];
// const filteredStudents = students.filter((stud, index) => {
//     console.log(index);
//     return stud.age <= 18;
// });
// console.log(filteredStudents);

// const marks =[
//     {subject: "Eng", marks: 75},
//     {subject: "Hin", marks: 80},
//     {subject: "Mat", marks: 65},
//     {subject: "Sci", marks: 95},
// ];

// function sumAllMarks(totalMarks, subj){
//     return totalMarks + subj.marks;
// }

// const res = marks.reduce( sumAllMarks, 0);
// console.log(res);

const cartoons = [
    "Schichan",
    "Doremon",
    "Spiderman",
    "Batman",
    "Batman",
    "Doremon",
];
const res = cartoons.reduce(function (obj, cartoon){
    if(!obj[cartoon]){
        obj[cartoon] = 1;
    } else {
        obj[cartoon]++;
    }
    return obj;
}, {});
console.log(res);