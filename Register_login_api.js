const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key';

// Middleware
app.use(bodyParser.json());

// Simulate a database with a JSON file
const USERS_FILE = './users.json';

// Helper to read users from file
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) {
    return [];
  }
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
};

// Helper to write users to file
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Register API
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const users = readUsers();
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  writeUsers(users);

  res.status(201).json({ message: 'User registered successfully.' });
});

// Login API
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const users = readUsers();
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password.' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid username or password.' });
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected Route Example
app.get('/protected', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required.' });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    res.json({ message: `Welcome, ${user.username}!` });
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
