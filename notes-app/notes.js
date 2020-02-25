const fs = require('fs')

const getNotes = function () {
    return 'Your notes..'
}

const addNote = function (title, body) {
    const notes = loadNotes()
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        
    }
    
}

//module.exports = getNotes //how to store more than one object?
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
