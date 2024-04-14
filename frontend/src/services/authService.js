// frontend/src/services/authService.js

// Mock function to simulate user authentication
export const login = async (username, password) => {
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
