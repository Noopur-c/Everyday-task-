// Function to simulate fetching data from a server
function fetchData() {
    return new Promise((resolve) => {
        // Simulate a 2-second delay
        setTimeout(() => {
            const items = ['Item 1', 'Item 2', 'Item 3']; // Sample data
            resolve(items); // Resolve the promise with the data
        }, 2000);
    });
}

// Using the fetchData function
fetchData()
    .then((data) => {
        console.log('Fetched data:', data); // Handle the resolved value
    })
    .catch((error) => {
        console.error('Error fetching data:', error); // Handle any potential errors
    });
