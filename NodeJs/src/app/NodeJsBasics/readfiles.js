//to read or files from node js we need fs module
//first we need to import

const fs = require('fs')
//by using this method we read a file synchronously
//we need to pass of the path of the file
// let text = fs.readFileSync('./files/input.txt', 'utf-8')
// console.log(text)


// //write the data to file
// let fileContent = `My Name is Nalini \n Date created ${new Date()}`
// //If the file does not exists first node will create the file and write the data to that file.
// fs.writeFileSync('./files/output.txt',fileContent)


//read file asynchronously
//this function will execute the in the background

fs.readFile('./files/start.txt', 'utf-8', (err, data) => {
  console.log(data)
  fs.readFile('./files/input.txt', 'utf-8', (error2, data1) => {
    console.log(data1)
    fs.readFile('./files/append.txt', 'utf-8', (error3, data2) => {
      console.log(data2)
      //to write the data asynchronously we need to use writefile method
      //here we are calling a callback function from inside of another callback function this is called callback hell
      fs.writeFile('./files/output.txt', `${data1} ${data2} date created ${new Date()}`, () => {
        console.log("File Written successfully")
      })
    })
  })
})
console.log("Reading file...")
