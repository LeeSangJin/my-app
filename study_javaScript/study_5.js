'use strict';

//* Array
//* Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//* Use forEach
const fruits = ['Apple', 'Banana'];
// fruits.forEach(function (fruit, index, array) {
fruits.forEach(
  (fruit) => console.log(fruit)
  // console.log(index);
  // console.log(array);
);

//* Addtion, deletion, copy
//* push : add to the end
fruits.push('Melon');
console.log(fruits);

//* pop : remove from end
const poped = fruits.pop(); //* return
console.log(fruits);

//* unshift, shift => slower than pop, push
//* unshift : add to the beginning
fruits.unshift('Melon', 'Banana');
console.log(fruits);
//* shift : remove from beginning
fruits.shift();
console.log(fruits);

//* splice : remoe by index position
fruits.push('Lemon', 'Pitch');
console.log(fruits);

fruits.splice(1); //* (start: number, deleteCount: number)
console.log(fruits); //* [1]

fruits.splice(1, 1);
console.log(fruits); //* [0,2,3,4]

fruits.splice(1, 1, 'random1', 'random2');
console.log(fruits); //* [0, random1, random2, 3, 4]

//* combine two array
const fruits2 = ['A', 'B'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //* fruits + fruits2

//* include
console.log(fruits.includes('Lemon')); //* true OR false

//* lastIndexOf
fruits.push['Apple'];
console.log(fruits.indexOf('Apple')); //* 0
console.log(fruits.lastIndexOf('Apple')); //* 5
