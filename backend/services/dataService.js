// backend/services/dataService.js

const Data = require('../models/Data');

// Mock function to simulate data retrieval from MongoDB
exports.getDataFromDB = async () => {
  try {
    return await Data.find();
  } catch (error) {
    console.error('Error fetching data from DB:', error);
    throw new Error('Internal server error');
  }
};
