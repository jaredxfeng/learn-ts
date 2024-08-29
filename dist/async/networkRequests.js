"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://jsonplaceholder.typicode.com/todos/';
function getTodos(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        // ready state 1 before sending the request
        const response = yield fetch(url);
        console.log('Response header received. Status:', response.statusText);
        // ready state 2, after receiving the response headers
        // ready state 3, when downloading the response body?
        let data = yield response.json(); // extract from json string
        // ready state 4 body, after downloading and parsing
        if (!response.ok) {
            callback('could not fetch data', '');
        }
        else {
            callback('', data[22]);
        }
        return 'DONE!!!';
    });
}
function callback(err, data) {
    console.log('callback fired');
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
}
;
function handlePromise(promise) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield promise;
        console.log('Promise resolved with:', res);
    });
}
handlePromise(getTodos(callback));
console.log(1);
console.log(2);
console.log(3);
console.log(4);
