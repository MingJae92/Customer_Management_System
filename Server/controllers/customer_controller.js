// Import the CustomerModel from the specified path
import CustomerModel from '../models/customer_model.js';

// Controller function to create a new customer
const createCustomer = async (req, res) => {
  try {
    // Extract customer details from the request body
    const { name, email, phone, address } = req.body;

    // Create a new customer using the CustomerModel
    await CustomerModel.create({ name, email, phone, address });

    // Respond with a success message
    return res.status(201).json({ message: "Customer details saved to DB!" });
  } catch (error) {
    // Handle errors and respond with a server error message
    console.error("Error creating customer:", error);
    return res.status(500).json({ message: "Server error!" });
  }
};

// Controller function to get customer details by ID
const getCustomerDetailsById = async (req, res) => {
  try {
    // Extract customer ID from the request parameters
    const customerDetailsId = req.params.id;

    // Find customer details by ID using the CustomerModel
    const customerDetails = await CustomerModel.findById(customerDetailsId);

    // Check if customer details are found and respond accordingly
    if (customerDetails) {
      return res.status(200).json({ message: "Customer details found!", data: customerDetails });
    } else {
      return res.status(404).json({ message: "Customer details not found!" });
    }
  } catch (error) {
    // Handle errors and respond with a server error message
    console.error("Error getting customer details by ID:", error);
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
      return res.status(200).json({ message: "Customer details updated!", data: updatedCustomer });
    } else {
      return res.status(404).json({ message: "Customer details not found!" });
    }
  } catch (error) {
    // Handle errors and respond with a server error message
    console.error("Error updating customer details by ID:", error);
    return res.status(500).json({ message: "Server error!" });
  }
};

// Export the controller functions for use in other files
export { createCustomer, getCustomerDetailsById, updateCustomerDetailsById };
