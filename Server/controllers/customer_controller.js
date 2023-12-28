
import CustomerModel from '../models/customer_model.js';

// You can use `absolutePath` if needed, but the import should be like above


const createCustomer = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    await CustomerModel.create({ name, email, phone, address });
    return res.status(201).json({ message: "Customer details saved to DB!" });
  } catch (error) {
    console.error("Error creating customer:", error);
    return res.status(500).json({ message: "Server error!" });
  }
};

const getCustomerDetailsById = async (req, res) => {
  try {
    const customerDetailsId = req.params.id;
    const customerDetails = await CustomerModel.findById(customerDetailsId);
    if (customerDetails) {
      return res.status(200).json({ message: "Customer details found!", data: customerDetails });
    } else {
      return res.status(404).json({ message: "Customer details not found!" });
    }
  } catch (error) {
    console.error("Error getting customer details by ID:", error);
    return res.status(500).json({ message: "Server error!" });
  }
};

const updateCustomerDetailsById = async (req, res) => {
  try {
    const customerDetailsId = req.params.id;
    const { name, email, phone, address } = req.body;
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(
      customerDetailsId,
      { name, email, phone, address },
      { new: true }
    );
    if (updatedCustomer) {
      return res.status(200).json({ message: "Customer details updated!", data: updatedCustomer });
    } else {
      return res.status(404).json({ message: "Customer details not found!" });
    }
  } catch (error) {
    console.error("Error updating customer details by ID:", error);
    return res.status(500).json({ message: "Server error!" });
  }
};

export { createCustomer, getCustomerDetailsById, updateCustomerDetailsById };
