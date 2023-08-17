//we are importing our own module.
const replaceHtml = require('./modules/replacehtml')


const events = require('events')


//get the event emitter from the user.js module
const user = require('./modules/user')
const myemitter = new user();

myemitter.on('usercreated', () => {
  console.log("User created")
})

myemitter.on('usercreated', () => {
  console.log("User created in the database")
})

myemitter.on('usercreated', (id, name) => {
  console.log(`User ${name}  created with ${id} in the database`)
})


myemitter.emit("usercreated", 100, 'nalini')

