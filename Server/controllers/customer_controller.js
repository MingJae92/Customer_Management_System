// Import the CustomerModel from the specified path
import CustomerModel from '../models/customer_model.js';
import mongoose from 'mongoose';
// Controller function to create a new customer
const createCustomer = async (req, res) => {
  try {
    // Extract customer details from the request body
    const { name, email, phone, address } = req.body;

    // Create a new customer using the CustomerModel
    await CustomerModel.create({ name, email, phone, address });

    // Log success message to the console
    console.log("Customer details saved to DB!");

    // Respond with a success message
    return res.status(201).json({ message: "Customer details saved to DB!" });
  } catch (error) {
    // Log error message to the console
    console.error("Error creating customer:", error);

    // Handle errors and respond with a server error message
    return res.status(500).json({ message: "Server error!" });
  }
};

// Controller function to get customer details by ID
const getCustomerDetailsById = async (req, res) => {
  try {
    // Extract customer ID from the request parameters

    const customerDetailsId = req.params.id;
    
    // Check if the ID is present
    if (!customerDetailsId) {
      console.log("Invalid customer ID provided in the URL parameters.");
      return res.status(400).json({ message: "Invalid customer ID provided!" });
    }

    // Find customer details by ID using a custom query
    const customerDetails = await CustomerModel.findById({_id:customerDetailsId});

    // Check if customer details are found
    if (customerDetails) {
      // Log success message to the console
      console.log("Customer details found:", customerDetails);

      return res.status(200).json({ message: "Customer details found!", data: customerDetails });
    } else {
      // Log not found message to the console
      console.log("Customer details not found for ID:", customerDetailsId);

      return res.status(404).json({ message: "Customer details not found!" });
    }
  } catch (error) {
    // Log error message to the console
    console.error("Error getting customer details by ID:", error);
 
    // Handle errors and respond with a server error message
    return res.status(500).json({ message: "Server error!" });
    
  }
};


// Controller function to update customer details by ID
const updateCustomerDetailsById = async (req, res) => {
  try {
    // Extract customer ID and updated details from the request parameters and body
    const customerDetailsId = req.params.id;
    const { name, email, phone, address } = req.body;

    // Update customer details by ID using the CustomerModel
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(
      customerDetailsId,
      { name, email, phone, address },
      { new: true }
    );

    // Check if customer details are updated and respond accordingly
    if (updatedCustomer) {
      // Log success message to the console
      console.log("Customer details updated:", updatedCustomer);

      return res.status(200).json({ message: "Customer details updated!", data: updatedCustomer });
    } else {
      // Log not found message to the console
      console.log("Customer details not found for ID:", customerDetailsId);

      return res.status(404).json({ message: "Customer details not found!" });
    }
  } catch (error) {
    // Log error message to the console
    console.error("Error updating customer details by ID:", error);

    // Handle errors and respond with a server error message
    return res.status(500).json({ message: "Server error!" });
    
  }
};

// Export the controller functions for use in other files
export { createCustomer, getCustomerDetailsById, updateCustomerDetailsById };
