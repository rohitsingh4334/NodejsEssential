var fs = require('fs');

// rename file
if (fs.existsSync("./lib/project-config.json")){
    fs.renameSync('./lib/project-config.json', './lib/config.json');
    console.log("json file renamed");
} else {
    if (fs.existsSync("./lib/config.json")){
        console.log("file already renamed");
    } else {
        console.log("project-config.js file is not present in directory lib/");
    }
}

// move file
if (fs.existsSync("./lib/notes.md")){
    fs.rename("./lib/notes.md", "./notes.md", function(err){
        if (err){
            console.log(err);
        } else {
            console.log("file moved successfully");
        }
    })
} else {
    if (fs.existsSync("./notes.md")){
        console.log("file already moved");
    } else {
        console.log("file note present in the directory");
    }
}