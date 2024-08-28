// --- generic interfaces ---

// interface Collection {
//     data: string[];
//     name: string;
// }

// what if we want Collection.data to store any type of data, not just strings?

interface Collection<T> {
    data: T[];
    name: string;
}

const collectionOne: Collection<string> = {
    data: ['mario', 'luigi', 'peach'],
    name: 'mario characters'
}

const collectionTwo: Collection<number> = {
    data: [1, 2, 3],
    name: 'some integers'
}

// --- generic function with generic interface ---
function randomCollectionItem<T>(c: Collection<T>): T {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}

const randomCollectionItemOne = randomCollectionItem<string>(collectionOne);
const randomCollectionItemTwo = randomCollectionItem(collectionTwo); // do not need to specify type with <> unto the function call 
console.log(randomCollectionItemOne, randomCollectionItemTwo);