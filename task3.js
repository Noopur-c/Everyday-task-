function createCounter() {
    let count = 0; // Initialize the internal counter

    return function() {
        count++; // Increment the counter
        console.log(count); // Log the current count
    };
}

// Create two separate counters
const counter1 = createCounter();
const counter2 = createCounter();

// Call the first counter multiple times
counter1(); // Output: 1
counter1(); // Output: 2

// Call the second counter multiple times
counter2(); // Output: 1
counter2(); // Output: 2
counter2(); // Output: 3
