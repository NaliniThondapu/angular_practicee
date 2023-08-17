const readline = require('readline')
//this readline module is used to read the input from the terminal.

//this interface accepts object which is combination of inout and output params
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//this requires two params one is message and second one is callback function
//which accepts the input.
rl.question("Please enter your name:", (name) => {
  console.log("You entered:" + name);
  //we must close the interface
  //This is also type of close event
  rl.close();
})

//If required we can do some operations after the close event triggered
rl.on('close', () => {
  console.log("Interface closed");
  process.exit(0);
})
