// Simulating an asynchronous operation
const fetchData = async () => {
    // This function simulates fetching data from an API
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% chance to succeed
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject(new Error("Failed to fetch data."));
            }
        }, 1000);
    });
};

// Async function to handle fetching data
const handleDataFetch = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Call the function to fetch data
handleDataFetch(); 