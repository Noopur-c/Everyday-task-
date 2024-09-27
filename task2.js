// Sample array of user objects
const users = [
    { name: 'Aaa', age: 25, isActive: true },
    { name: 'Bbb', age: 30, isActive: false },
    { name: 'Ccc', age: 28, isActive: true },
    { name: 'Ddd', age: 22, isActive: true },
    { name: 'Eee', age: 35, isActive: false }
];

// 1. Filter the users who are active
const activeUsers = users.filter(user => user.isActive);
console.log('Active Users:', activeUsers);

// 2. Map the active users to create a new array of names
const activeUserNames = activeUsers.map(user => user.name);
console.log('Active User Names:', activeUserNames);

// 3. Reduce the users' ages to find the total age of all users
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log('Total Age of All Users:', totalAge);

// 4. Sort the users by age in ascending order
const sortedUsers = [...users].sort((a, b) => a.age - b.age);
console.log('Sorted Users by Age:', sortedUsers);

// 5. Use forEach to log each user's name and age
users.forEach(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
});