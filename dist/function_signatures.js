"use strict";
// function signatures
function addTwoNumbers(a, b) {
    return a + b;
}
function joinTwoNumbers(a, b) {
    return `${a}${b}`;
}
function squareNumber(a) {
    return a * a;
}
function addThreeNumbers(a, b, c) {
    return a + b + Number(c);
}
let calcs = [];
calcs.push(addTwoNumbers);
// calcs.push(joinTwoNumbers) wrong signature
calcs.push(squareNumber);
const shapeOne = {
    name: 'square',
    calcArea(l) {
        return l * l;
    }
};
const shapeTwo = {
    name: 'circle',
    calcArea(r) {
        return Math.PI * r ^ 2;
    }
};
shapeTwo.calcArea(2);
