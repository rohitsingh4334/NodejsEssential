var fs = require('fs');

// reading directory c
var files = fs.readdirSync('./ch_05/01/lib');
console.log("Reading file synchronously.....")
console.log(files)

// reading directory asynchrounsly
fs.readdir('./ch_05/01/lib', function(err, files){
    if (err) {
        throw err;
    };

    console.log(files)
})

console.log("Reading file asynchronously.....")