var Person = require("./lib/Person");
var rohit = new Person('rohit singh');

rohit.on('speak', function(said){
    console.log(`${this.name}: ${said}`);
});

rohit.emit('speak', "You may delay, but time will not.");