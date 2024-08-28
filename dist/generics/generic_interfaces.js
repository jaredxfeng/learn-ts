"use strict";
// --- generic interfaces ---
const collectionOne = {
    data: ['mario', 'luigi', 'peach'],
    name: 'mario characters'
};
const collectionTwo = {
    data: [1, 2, 3],
    name: 'some integers'
};
// --- generic function with generic interface ---
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const randomCollectionItemOne = randomCollectionItem(collectionOne);
const randomCollectionItemTwo = randomCollectionItem(collectionTwo); // do not need to specify type with <> unto the function call 
console.log(randomCollectionItemOne, randomCollectionItemTwo);
