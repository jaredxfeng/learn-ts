type Base = 'classic' |  'thick' | 'thin' | 'garlic';

interface HasFormatter {
    format(): string;
}

// abstract class implements the interface with an abstract method
abstract class MenuItem implements HasFormatter {
    // adding access modifiers before the arguments do two things
    //   1. add the args as properties; 2. restrict corresponding access 
    constructor(protected title: string, protected price: number) {
        // this.title = title; 
        // this.price = price;
    } 

    // getter method
    get details(): string {
        return `${this.title} - $${this.price}`;
    }

    // abstract methods must not be implemented inside the abstract class
    // but they must be implemented in subclasses
    // also, this is a class implementation of the respective property in the interface
    abstract format(): string
}

// class inheritance
class Pizza extends MenuItem {
    // private title: string;
    // private price: number;
    private base: Base = 'classic';
    private toppings: string[] = [];

    constructor(title: string, price: number) {
        super(title, price);
    }

    addTopping(topping: string): void {
        this.toppings.push(topping);
    }

    removeTopping(topping: string): void {
        this.toppings.filter((t) => t !== topping);
    }

    selectBase(base: Base): void {
        this.base = base;
    }

    format(): string {
        let formatted = this.details + '\n';
        
        // base
        formatted += `Pizza on a ${this.base} base`
        
        // toppings
        if (!this.toppings.length) {
            formatted += ` with no toppings`
        } else {
            formatted += ` with ${this.toppings.join(', ')} toppings.`
        }
        return formatted;
    }
}

const pizzaOne = new Pizza('mario special', 15); // type inference for class objects 
const pizzaTwo: Pizza = new Pizza('luigi special', 10);

pizzaOne.addTopping(`pineapples`)
pizzaOne.addTopping(`pineapples`)
pizzaOne.addTopping(`pineapples`)
pizzaOne.addTopping(`pineapples`)

// use classes as types for function arguments
function addMushroomsToPizzas(pizzas: Pizza[]): void {
    for (const pizza of pizzas) {
        pizza.addTopping("mushrooms");
    }
}
// addMushroomsToPizzas([pizzaOne, pizzaTwo])

function printMenuItem(item: MenuItem): void {
    console.log(item.details);
}

function printFormatted_(val: HasFormatter): void {
    console.log(val.format());
}

printFormatted_(pizzaOne);