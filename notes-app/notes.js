const fs = require('fs')

// Order: we want to:
// 1.) Save data 
// 2.) Take the object or an array
// 3.) We use JSON stringify and then
// 4.) We write it to the fiesystem (fs)

const getNotes = function () {
    return 'Your notes..'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })// verify notes exist - w/ array filter method, loop through array to find duplicate values for note.title property 

    if (duplicateNotes.length === 0) { // duplicateNotes array is set to length of 0 nothing was passed into the array, so its empty, and no duplicates exist
        // no duplicates exist? ....push new note into notes.json
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }

}

const saveNotes = function (notes) {  //takes 
    const dataJSON = JSON.stringify(notes) //store stringified JSON notes data to dataJSON const
    fs.writeFileSync('notes.json', dataJSON)
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
