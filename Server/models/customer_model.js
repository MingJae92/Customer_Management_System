// Importing mongoose library for MongoDB interaction
import mongoose from 'mongoose';

// Destructuring mongoose object to extract Schema and model functions
const { Schema, model } = mongoose;

// Defining a schema for the 'Customer' model
const customerSchema = new Schema({
    // Name of the customer, must be a string and is required
    name: {
        type: String,
        required: true,
    },
    // Email of the customer, must be a string and is required
    email: {
        type: String,
        required: true,
    },
    // Phone number of the customer, must be a string and is required
    phone: {
        type: String,
        required: true,
    },
    // Address of the customer, must be a string and is required
    address: {
        type: String,
        required: true,
    },
    
    
});

// Creating a 'CustomerModel' based on the defined schema
export default model('CustomerModel', customerSchema);
