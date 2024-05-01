const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    hobbies: {
        type: [String],
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    academicStrengths: {
        type: [String],
        required: true
    }
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
