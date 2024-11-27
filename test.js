const BASE_URL = 'http://localhost:3000';

// Function to test the register endpoint
async function testRegister() {
  const fetch = await import('node-fetch').then((mod) => mod.default);

  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'testuser', password: 'password123' }),
  });

  const data = await response.json();
  console.log('Register Response:', data);
}

// Function to test the login endpoint
async function testLogin() {
  const fetch = await import('node-fetch').then((mod) => mod.default);

  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'testuser', password: 'password123' }),
  });

  const data = await response.json();
  console.log('Login Response:', data);

  return data.token; // Return the token for further testing
}

// Function to test the protected endpoint
async function testProtected(token) {
  const fetch = await import('node-fetch').then((mod) => mod.default);

  const response = await fetch(`${BASE_URL}/protected`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  console.log('Protected Response:', data);
}

// Run all tests sequentially
async function runTests() {
  console.log('Testing Register API...');
  await testRegister();

  console.log('Testing Login API...');
  const token = await testLogin();

  if (token) {
    console.log('Testing Protected API...');
    await testProtected(token);
  }
}

runTests();

