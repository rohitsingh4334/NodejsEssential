var waitTime = 3000; //ms
var currentTime = 0; //ms
var waitInterval = 50; //ms
var percentWaited = 0; //ms

function writeWaitingPercent(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function() {
    currentTime += waitInterval ;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout( function() {
    clearInterval(interval)
    writeWaitingPercent(100);
    console.log("\ndone")
}, waitTime);

process.stdout.write("\n");
writeWaitingPercent(percentWaited)