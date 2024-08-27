"use strict";
class Pizza {
    // adding access modifiers before the arguments do two things
    //   1. add the args as properties; 2. restrict corresponding access 
    constructor(title, price) {
        this.title = title;
        this.price = price;
        // private title: string;
        // private price: number;
        this.base = 'classic';
        this.toppings = [];
        // this.title = title; 
        // this.price = price;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('mario special', 15);
pizza.selectBase('garlic');
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
console.log(pizza);
