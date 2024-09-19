const fs = require('fs');
const path = require('path');

// Function to read and parse CSV file
function readCSVFile(filePath) {
    const csvData = fs.readFileSync(filePath, 'utf8');
    return parseCSV(csvData);
}

// Function to parse CSV manually
function parseCSV(data) {
    const lines = data.split('\n');
    const headers = lines[0].split(',');

    const result = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const obj = {};
        const currentLine = line.split(',');

        headers.forEach((header, index) => {
            obj[header.trim()] = currentLine[index] ? currentLine[index].trim() : '';
        });

        result.push(obj);
    }
    return result;
}

// Function to perform calculations on parsed data
function processTrainData(trains) {
    // 1. Find Maximum and Minimum Stop
    const islnoValues = trains.map(train => parseInt(train.islno)).filter(Number.isFinite);
    const maxStop = Math.max(...islnoValues);
    const minStop = Math.min(...islnoValues);
    console.log("Maximum Stop: " + maxStop);
    console.log("Minimum Stop: " + minStop);

    // 2. Get total number of trains
    const trainNumbers = [...new Set(trains.map(train => train['Train No.']))];
    const totalTrains = trainNumbers.length;
    console.log("Total Number of Trains: " + totalTrains);

    // 3. Longest and Shortest Distance covered by train
    const distances = trains.map(train => parseInt(train.Distance)).filter(Number.isFinite);
    const maxDistance = Math.max(...distances);
    const minDistance = Math.min(...distances);
    console.log("Longest Distance: " + maxDistance);
    console.log("Shortest Distance: " + minDistance);

    // 4. Group trains by islno
    /*const groupedByIslno = trains.reduce((acc, train) => {
        const islno = train.islno;
        if (!acc[islno]) {
            acc[islno] = [];
        }
        acc[islno].push(train);
        return acc;
    }, {});
    console.log("Grouped by islno:", groupedByIslno);*/
}

// Path to the CSV file
const filePath = path.join(__dirname, 'trains.csv');

// Read and process the CSV file
const trains = readCSVFile(filePath);
processTrainData(trains);


