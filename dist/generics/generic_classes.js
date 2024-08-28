"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// generic classes with constraints, that any type passed in must have an id property
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        // problem with below: property id DNE within T
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const usersCollection = new DataCollection([
    // { id: 1 } // works
    // { id: 1, game: "hello" } // works
    { name: 'mario', score: 100, id: 1 }, // works
    { name: 'luigi', score: 90, id: 2 },
]);
usersCollection.deleteOne(2);
// usersCollection.add({ name: 'waluigi', score: 123, id: 4 })
console.log('load one - ', usersCollection.loadOne());
console.log('load all - ', usersCollection.loadAll());
