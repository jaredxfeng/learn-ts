const url = 'https://jsonplaceholder.typicode.com/todos/';

async function getTodos(callback: (err: string, data: string) => void): Promise<string> {
    // ready state 1 before sending the request
    const response = await fetch(url);
    console.log('Response header received. Status:', response.statusText);
    // ready state 2, after receiving the response headers
    // ready state 3, when downloading the response body?
    let data = await response.json(); // extract from json string
    // ready state 4 body, after downloading and parsing
    if (!response.ok) {
        callback('could not fetch data', '');
    } else {
        callback('', data[22]);
    }

    return 'DONE!!!'
}

function callback(err: string, data: string): void {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
};

async function handlePromise<T>(promise: Promise<T>): Promise<void> {
    const res = await promise;
    console.log('Promise resolved with:', res);
}

handlePromise(getTodos(callback));
console.log(1);
console.log(2);
console.log(3);
console.log(4);
