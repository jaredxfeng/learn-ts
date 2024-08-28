"use strict";
// type TPerson = {
//     firstName: string
//     id: number
// }
Object.defineProperty(exports, "__esModule", { value: true });
function addIdToValue(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
    // or:
    // return { ...val, id: id }
}
const post = addIdToValue({ title: 'Marmite Rules', thumbsUp: 250 });
console.log(post.id, post.title, post.thumbsUp);
