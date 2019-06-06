// console without global
console.log("Hello World");

// console with global 
global.console.log("Hello World with global");

// local variable 
var Hello = "Hello World from Node js";

console.log(`local variable: ${Hello}`);
// local variable could not be access with global
console.log(`global variable: ${global.Hello}`);

var hello = "Hello World from Node js";

var justNode = hello.slice(17);

console.log(`Rock on world from ${justNode} using string slice()`);

console.log(`directory name: ${__dirname}`);

console.log(`filename name: ${__filename}`);

// using path module

var path = require("path")
console.log(`filename name using path module: ${path.basename(__filename)}`);

console.log(`filename name using path module without extension: ${path.basename(__filename, '.js')}`);

console.log(`directory name using path module: ${path.basename(__dirname)}`);


