const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday"
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Opposite of JSON.stringify
const parsedData = JSON.parse(bookJSON); //returns the parsed JSON
console.log(parsedData.author); //Ryan holiday