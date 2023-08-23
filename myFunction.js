function getExpectedValue(param1, param2, param3) {
    const dataset = {
        "A": {
            "A": [0, 0, 0, 0, 0],
            "B": [1, 0, 1, 1, 0],
            "C": [0, 0, 0, 0, 0]
        },
        "B": {
            "A": [1, 0, 1, 1, 1],
            "B": [1, 0, 1, 1, 1],
            "C": [1, 0, 0, 1, 1]
        },
        "C": {
            "A": [0, 0, 0, 0, 0],
            "B": [1, 0, 0, 1, 1],
            "C": [0, 0, 0, 0, 0]
        }
    };
    
    try {
        if (!dataset[param1] || !dataset[param1][param2]) {
            throw new Error("Invalid parameters");
        }
        
        const values = dataset[param1][param2];
        
        if (param3 >= 0 && param3 < values.length) {
            return values[param3];
        } else {
            throw new Error("Invalid index for param3");
        }
    } catch (error) {
        console.error(error.message);
        return -1; // Return a default value to indicate an error
    }
}

// Example usage
const result = getExpectedValue("B", "A", 2); // Should return 1
console.log(result);
