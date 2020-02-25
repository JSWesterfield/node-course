const fs = require('fs')

const getNotes = function () {
    return 'Your notes..'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    
    notes.push({
        title: title,
        body: body
    })

    console.log(notes)
}



const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return [] //add an empty array if nothing exists
    }
    
}

//module.exports = getNotes //how to store more than one object?
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
