// Importing the Express framework and creating a router instance
import express from "express";
const router = express.Router();

// Importing the customer controller module for handling customer-related logic
import * as customerController from "../controllers/customer_controller.js"; // Explicitly added '.js'

// Define a simple asyncMiddleware function to handle asynchronous route functions
const asyncMiddleware = (fn) => (req, res, next) => {
    // Wrapping the asynchronous function in a Promise to handle errors using 'catch'
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Defining routes with asyncMiddleware to handle asynchronous operations in the controller

// Route for creating a new customer (POST request)
router.post("/customerDetails", asyncMiddleware(customerController.createCustomer));

// Route for fetching customer details by ID (GET request)
router.get(
    "/customerDetails/:id",
    asyncMiddleware(customerController.getCustomerDetailsById)
);

// Route for updating customer details by ID (PUT request)
router.put(
    "/customerDetails/:id",
    asyncMiddleware(customerController.updateCustomerDetailsById)
);

// Exporting the router for use in other parts of the application
export default router;
