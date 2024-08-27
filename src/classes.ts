type Base = 'classic' |  'thick' | 'thin' | 'garlic';

class Pizza {
    // private title: string;
    // private price: number;
    private base: Base = 'classic';
    private toppings: string[] = [];

    // adding access modifiers before the arguments do two things
    //   1. add the args as properties; 2. restrict corresponding access 
    constructor(private title: string, private price: number) {
        // this.title = title; 
        // this.price = price;
    }

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string): void {
        this.toppings.filter((t) => t !== topping)
    }

    selectBase(b: Base): void {
        this.base = b
    }
}

const pizza = new Pizza('mario special', 15)

pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')

console.log(pizza)