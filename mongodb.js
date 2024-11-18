const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';  // MongoDB URL
const dbName = 'myDatabase';             // Database Name

// Connect to MongoDB
async function connectToDb() {
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected to MongoDB');
  return client.db(dbName);
}

// CRUD Operations
async function runCrudOperations() {
  const db = await connectToDb();
  const collection = db.collection('users'); // The collection we will work with

  // CREATE: Insert multiple documents
  const users = [
    { name: 'Aaa', age: 28, email: 'aaa@example.com' },
    { name: 'Bbb', age: 24, email: 'bbb@example.com' },
    { name: 'Ccc', age: 30, email: 'ccc@example.com' }
  ];
  const insertResult = await collection.insertMany(users);
  console.log(`${insertResult.insertedCount} users inserted`);

  // READ: Find all users
  const allUsers = await collection.find().toArray();
  console.log('All users:', allUsers);

  // UPDATE: Update Aaa's age
  const updateResult = await collection.updateOne(
    { name: 'Aaa' },       // Filter by name
    { $set: { age: 29 } }     // Update age to 29
  );
  console.log(`Matched ${updateResult.matchedCount} document(s), modified ${updateResult.modifiedCount} document(s)`);

  // DELETE: Delete user Bbb
  const deleteResult = await collection.deleteOne({ name: 'Bbb' });
  console.log(`${deleteResult.deletedCount} document(s) deleted`);

  // READ: Find remaining users after deletion
  const remainingUsers = await collection.find().toArray();
  console.log('Remaining users:', remainingUsers);
}

// Run CRUD operations
runCrudOperations().catch(console.error);
