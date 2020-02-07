const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.blue.inverse.bold('success')
console.log(greenMsg)

//console.log(process.argv) //in NodeJS == 'Arguement v' an array that contains all the arguments provide-should show an 'array of all my values' from my console.logs
console.log(process.argv[2]) // retrieve 3rd index value from our arguments array