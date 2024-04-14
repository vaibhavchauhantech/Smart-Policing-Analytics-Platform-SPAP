// frontend/src/services/dataService.js

// Mock function to simulate data retrieval from backend
export const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // Simulate delay
  });
};
