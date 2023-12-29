// Import required modules and packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import { db_connection } from "./mongo_db_connection.js";
import CustomerRoutes from './routes/customer_route.js';

// Load environment variables from the specified file
dotenv.config({ path: '../config/.env' }); 

// Create an Express application
const app = express();

// Set up CORS middleware
app.use(cors());

// Set the port for the server to listen on, using the specified port or defaulting to 5000
const port = process.env.SERVER_PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the customerRoutes for requests to the /customerdataapi endpoint
app.use("/customerdataapi", CustomerRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server connecting to ${port}`);
});

// Get the MongoDB connection URL from environment variables
const db_url = process.env.MONGO_DB_URL;

// Call the db_connection function to establish the database connection
db_connection(db_url);
