// backend/services/authService.js

// Mock function to simulate user authentication
exports.authenticateUser = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        resolve({ token: 'mockToken' });
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 1000); // Simulate delay
  });
};
