const fs = require('fs');
// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');  //returns json formatted data from the 1-json.json file
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title); 
//console.log(dataBuffer); //a string isnt returned, but a buffer, which nodejs to represent data binary data.
//console.log(dataBuffer.toString()); //to get data back we use a toString method 

//
// Challenge: work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data 
// 4. Test your work by viewing data in the JSON file