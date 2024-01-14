const fs = require('fs').promises;

let jsonData;  // Declare a global variable

function readJsonFile(callback) {
    fs.readFile('output.json', 'utf8')
        .then(data => {
            // Parse JSON data and store it in the global variable
            jsonData = JSON.parse(data);

            // Now 'jsonData' contains the parsed JSON content
            // console.log(jsonData);

            // You can use 'jsonData' in other parts of your code
            // For example, you might want to process or manipulate the data further
            // ...

            // Call the callback to indicate that the operation is complete
            callback();
        })
        .catch(err => {
            console.error('Error reading or parsing the file:', err);
        });
}

let title;
// Call the function to read and process the JSON file
readJsonFile(() => {
    // Now you can use 'jsonData' outside the function
    title = jsonData[0]['title'];
});
console.log(title);
