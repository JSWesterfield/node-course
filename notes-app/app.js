const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: { 
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'  
        },
        body: {
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command git add
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

yargs.parse() // yargs parses with configuration details
//console.log(yargs.argv) //console.logs our yargs object and the argv property
