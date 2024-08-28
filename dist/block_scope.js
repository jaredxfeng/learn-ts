"use strict";
var BlockScope;
(function (BlockScope) {
    let age = 30;
    if (true) {
        let age = 40;
        console.log('inside code block: ', age);
    }
    console.log('outside code block: ', age);
})(BlockScope || (BlockScope = {}));
