import a from "./app.js"
// 1st type export - default export 
console.log(a);

import {b} from "./app.js"
// 2nd type export - named export
console.log(b);

// same name as named export 
// import b from "./app.js"
// console.log(b); // -> 10 same as variable a