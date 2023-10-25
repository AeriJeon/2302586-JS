'use strict'

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
  
// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}
  
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, delection, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// combine two array
const fruits2 = ['🍐', '🥥']
const newFruits = fruits.concat(fruits2);
console.log(newFruits)

// 01. make a string out of an array
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join(',');
    console.log(result);
}

// 02. make an array out of a string
{
    const fruits = '🍎,🥝, 🍌,🍒' ;
    const result = fruits.split();
    console.log(result);

}
// 03. make this arrat out of a string
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);

}

// 04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice()
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

