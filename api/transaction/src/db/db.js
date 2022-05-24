const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('database connected successfully...');
    } catch (error) {
        throw error;
    }
}

module.exports = connectDB;