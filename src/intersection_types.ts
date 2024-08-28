// type TPerson = {
//     firstName: string
//     id: number
// }

// type TUser = TPerson & {
//     email: string
// }

export interface HasID {
    id: number;
}

function addIdToValue<T>(val: T): T & HasID {
    const id = Math.random()
    
    return { ...val, id }
    // or:
    // return { ...val, id: id }
}

interface Post {
    title: string;
    thumbsUp: number;
}

const post = addIdToValue<Post>({ title: 'Marmite Rules', thumbsUp: 250 })
console.log(post.id, post.title, post.thumbsUp)