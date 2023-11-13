## Example1
```
console.log("Program has started")

//STORED IN-FIRSTPHASE
setTimeout(() => {
  console.log("Timer callback executed")
}, 0);

//STORED IN-SECONDPHASE , this is IO task
//The call back function related to this is not pushed immediately
//Function will pushed to second phase only when file read got completed
fs.readFile('./files/largefile.txt', () => {
  console.log("File read completed")
})

//STORED IN-3RD PHASE
setImmediate(() => {
  console.log("setImmediate callback executed")
})

console.log("Program has completed")
```

## Output
```
Program has started
Program has completed
Timer callback executed
setImmediate callback executed
File read completed
```

## Example2

```
// Second example
// In this example we are added all the code inside the readFile
console.log("Program has started")

//STORED IN-SECONDPHASE
fs.readFile('./files/largefile.txt', () => {
  console.log("File read completed")

  //STORED IN-FIRSTPHASE
  setTimeout(() => {
    console.log("Timer callback executed")
  }, 0);

  //STORED IN-3RD PHASE
  setImmediate(() => {
    console.log("setImmediate callback executed")
  })

  //This callback will be pushed to nextTick queue
  //which will execute if the current phase got finished its callback function executed
  process.nextTick(()=>{
    console.log("process.nexttick callback executed")
  })

})
console.log("Program has completed")
```

## Output

```
Program has started
Program has completed
File read completed
process.nexttick callback executed
setImmediate callback executed
Timer callback executed
```

