// function signatures

type Calculator = (numOne: number, numTwo: number) => number

function addTwoNumbers(a: number, b: number) {
    return a + b
}

function joinTwoNumbers(a: number, b: number) {
    return `${a}${b}`
}

function squareNumber(a: number) {
    return a * a
}

function addThreeNumbers(a: number, b: number, c: number): number {
    return a + b + Number(c)
}

let calcs: Calculator[] = []

calcs.push(addTwoNumbers)
// calcs.push(joinTwoNumbers) wrong signature
calcs.push(squareNumber) 
// calcs.push(addThreeNumbers) wrong signature

// -------------------------

// function signatures in interfaces

interface HasArea {
    name: string;
    calcArea: (a: number) => number;
}

const shapeOne: HasArea = {
    name: 'square',
    calcArea(l: number): number {
        return l * l
    }
}

const shapeTwo: HasArea = {
    name: 'circle',
    calcArea(r: number): number {
        return Math.PI * r ^ 2
    }
}

shapeTwo.calcArea(2)