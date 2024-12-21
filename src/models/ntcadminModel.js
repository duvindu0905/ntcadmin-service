const mongoose = require('mongoose');

const operatorSchema = new mongoose.Schema({
    operatorId: {
        type: Number,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    passWord: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    nic: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    }
});

// Automatically remove _id and __v from response
operatorSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;  // Remove _id
    delete ret.__v;  // Remove __v
    return ret;  // Return the transformed object
  },
});

module.exports = mongoose.model('Operator', operatorSchema);
