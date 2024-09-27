function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        // Clear the previous timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage
const logMessage = () => {
    console.log('Debounced function executed!');
};

// Create a debounced version of the logMessage function
const debouncedLogMessage = debounce(logMessage, 1000);

// Simulate rapid calls to the debounced function
debouncedLogMessage();
debouncedLogMessage();
debouncedLogMessage();

// Only one log message will appear after 1 second
