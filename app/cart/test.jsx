// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/json-cleaning and then clean the object according to the following rules: Remove all keys that have values of N/A, -, or empty strings. If one of these values appear in an array, remove that single item from the array. For all keys removed, create a key/value pair at the end of the output object with the key items_removed and the value is the count. Then console log the modified object as a string.

// Example Input
// {"name":{"first":"Daniel","middle":"N/A","last":"Smith"},"age":45}

// Example Output
// {"name":{"first":"Daniel","last":"Smith"},"age":45, "items_removed": 1}

const axios = require('axios');

// Function to clean the object based on specified rules
const cleanJsonObject = async () => {
    try {
        // Make a GET request to the specified API route
        const response = await axios.get('https://coderbyte.com/api/challenges/json/json-cleaning');

        // Extract the JSON object from the response
        const inputObject = response.data;

        // Define a variable to keep track of the count of removed items
        let itemsRemovedCount = 0;

        // Function to recursively clean the object
        const cleanObject = (obj) => {
            for (const key in obj) {
                if (typeof obj[key] === 'object') {
                    // Recursively clean nested objects
                    cleanObject(obj[key]);

                    // Remove keys with N/A, -, or empty string values
                    if (obj[key] === 'N/A' || obj[key] === '-' || obj[key] === '') {
                        delete obj[key];
                        itemsRemovedCount++;
                    }
                } else if (Array.isArray(obj[key])) {
                    // Remove N/A, -, or empty string values from arrays
                    obj[key] = obj[key].filter(item => item !== 'N/A' && item !== '-' && item !== '');

                    // Update itemsRemovedCount based on the removed items count in the array
                    itemsRemovedCount += obj[key].length;
                } else {
                    // Remove keys with N/A, -, or empty string values
                    if (obj[key] === 'N/A' || obj[key] === '-' || obj[key] === '') {
                        delete obj[key];
                        itemsRemovedCount++;
                    }
                }
            }
        };

        // Start cleaning the object
        cleanObject(inputObject);

        // Add the items_removed key/value pair to the modified object
        inputObject.items_removed = itemsRemovedCount;

        // Convert the modified object to a JSON string and log it
        console.log(JSON.stringify(inputObject, null, 2));

    } catch (error) {
        console.error('Error fetching or processing data:', error.message);
    }
};

// Call the cleanJsonObject function to initiate the cleaning process
cleanJsonObject();

// __define-ocg__ - This comment includes the required keyword "__define-ocg__"