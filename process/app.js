// type on cmd node app.js --user rohit --greeting "hello world"
// console.log('using process module: ')
// console.log(process.argv)
// main app

// console.log("main app:")
function main(option){
    var index = process.argv.indexOf(option);
    return (index === -1) ? null : process.argv[index + 1]; // if index is -1 then return null else return value 
}

var greeting = main('--greeting');
var user = main('--user');

if (!user || !greeting) {
    console.log("phew! you blew it !!!!");
    console.log("let's try below command and see the magic.")
    console.log("node process/app.js --user rohit --greeting 'hello hello hello'")
} else {
    console.log(`Welcome ${user}, ${greeting}`);
}