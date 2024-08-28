// when importing another ts file, should not include the .ts extension
import { HasID } from './../intersection_types';

// generic classes with constraints, that any type passed in must have an id property
class DataCollection<T extends HasID> {
    constructor(private data: T[]) {}

    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll(): T[] {
        return this.data
    }
    add(val: T): T[] {
        this.data.push(val)
        return this.data
    }

    deleteOne(id: number): void {
        // problem with below: property id DNE within T
        this.data = this.data.filter((item) => item.id !== id)
    }

}

const usersCollection = new DataCollection([
    // { id: 1 } // works
    // { id: 1, game: "hello" } // works
    { name: 'mario', score: 100, id: 1 }, // works
    { name: 'luigi', score: 90, id: 2 },
])

usersCollection.deleteOne(2)

// usersCollection.add({ name: 'waluigi', score: 123, id: 4 })

console.log('load one - ', usersCollection.loadOne())
console.log('load all - ', usersCollection.loadAll())