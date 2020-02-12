const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {  // all the options we want our command to support
        title: {
            describe: 'Note title'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note!', argv)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create a list command
yargs.command({
    command: 'list',
    describe: 'Listing out all notes',
    handler: function () {
        console.log('Lists notes')
    }
})

// Create a read command

//
// Challenge: Add two new commands
//
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (pring placeholder message for now)
// 3. Test your work both commands and ensure correct output

console.log(yargs.argv)
