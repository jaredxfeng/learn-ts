"use strict";
// generics are generic reusable structures like functions, classes, interfaces, etc.
// generics can be passed in as arguments to functions etc
Object.defineProperty(exports, "__esModule", { value: true });
// without generics:
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
// notice how we had to write the same function 3 times, only difference is argument types and return types
// can we use the any type now? nope. we lose type safety
// function logAndReturnAny(val: any): any {
//     console.log(val);
//     return val;
// }
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
// const result = logAndReturnNumber(1);
// const result: string = logAndReturnNumber(1); // error type number is not assignable to type string
const resultOne = logAndReturnValue('mario');
const resultTwo = logAndReturnValue(false);
const resultThree = logAndReturnValue(1);
// example 2
function getRandomArrayValue(values) {
    // random index
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const usersOne = [
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
    { name: 'wario', score: 75 },
    { name: 'luigi', score: 99 },
    { name: 'yoshi', score: 111 },
    { name: 'toad', score: 50 },
    { name: 'bowser', score: 200 },
    { name: 'donkey kong', score: 250 },
    { name: 'diddy kong', score: 175 },
    { name: 'rosalina', score: 300 },
];
const randomUser = getRandomArrayValue(usersOne);
console.log(randomUser);
