var fs = require('fs');

var stream = fs.createReadStream('./chat.log', 'UTF-8');
var data = "";

// run once listner
stream.once("data", function(){
    console.log("\n");
    console.log("Started reading file");
    console.log("\n")
})

// reading line by line listner
stream.on("data", function(chunk){
    process.stdout.write(`chunk: ${chunk.length} | `);
    data += chunk;
});

// listner after reading the file
stream.on("end", function(){
    console.log("\n");
    console.log(`Finished reading file ${data.length}`);
    console.log('\n');
});