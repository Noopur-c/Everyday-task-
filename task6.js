const numbers = [5, 12, -3, 9, 18, 7, 21];

// Use find to locate the first number greater than 10
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log('First number greater than 10:', firstGreaterThanTen);

// Use some to check if there is any number divisible by 3
const hasDivisibleByThree = numbers.some(num => num % 3 === 0);
console.log('Is there any number divisible by 3?', hasDivisibleByThree);

// Use every to check if all numbers are positive
const allPositive = numbers.every(num => num > 0);
console.log('Are all numbers positive?', allPositive);
