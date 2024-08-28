"use strict";
// abstract class implements the interface with an abstract method
class MenuItem {
    // adding access modifiers before the arguments do two things
    //   1. add the args as properties; 2. restrict corresponding access 
    constructor(title, price) {
        this.title = title;
        this.price = price;
        // this.title = title; 
        // this.price = price;
    }
    // getter method
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
// class inheritance
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        // private title: string;
        // private price: number;
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings.filter((t) => t !== topping);
    }
    selectBase(base) {
        this.base = base;
    }
    format() {
        let formatted = this.details + '\n';
        // base
        formatted += `Pizza on a ${this.base} base`;
        // toppings
        if (!this.toppings.length) {
            formatted += ` with no toppings`;
        }
        else {
            formatted += ` with ${this.toppings.join(', ')} toppings.`;
        }
        return formatted;
    }
}
const pizzaOne = new Pizza('mario special', 15); // type inference for class objects 
const pizzaTwo = new Pizza('luigi special', 10);
pizzaOne.addTopping(`pineapples`);
pizzaOne.addTopping(`pineapples`);
pizzaOne.addTopping(`pineapples`);
pizzaOne.addTopping(`pineapples`);
// use classes as types for function arguments
function addMushroomsToPizzas(pizzas) {
    for (const pizza of pizzas) {
        pizza.addTopping("mushrooms");
    }
}
// addMushroomsToPizzas([pizzaOne, pizzaTwo])
function printMenuItem(item) {
    console.log(item.details);
}
function printFormatted_(val) {
    console.log(val.format());
}
printFormatted_(pizzaOne);
