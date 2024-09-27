const people = [
    { name: 'Aaa', ageGroup: 'adult' },
    { name: 'Bbb', ageGroup: 'child' },
    { name: 'Ccc', ageGroup: 'adult' },
    { name: 'Ddd', ageGroup: 'senior' },
    { name: 'Eee', ageGroup: 'child' }
];

const groupedByAgeGroup = people.reduce((accumulator, person) => {
    // Check if the ageGroup already exists in the accumulator
    if (!accumulator[person.ageGroup]) {
        // If not, create a new array for that ageGroup
        accumulator[person.ageGroup] = [];
    }
    // Push the current person into the appropriate ageGroup array
    accumulator[person.ageGroup].push(person);
    return accumulator; // Return the updated accumulator for the next iteration
}, {}); // Initialize with an empty object

console.log(groupedByAgeGroup);
