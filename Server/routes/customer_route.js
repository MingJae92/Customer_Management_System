// // // routes/customer_route.js
// // import express from 'express';
// // import customerController from '../controllers/customer_controller.js';

// // const router = express.Router();

// // // Middleware for handling async functions
// // const asyncMiddleware = (fn) => (req, res, next) => {
// //     Promise.resolve(fn(req, res, next)).catch(next);
// // };

// // router.post('/', asyncMiddleware(async (req, res) => {
// //     try {
// //         const customer = await customerController.createCustomer(req.body);
// //         res.status(201).json(customer);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // }));

// // router.get('/customer/:id', asyncMiddleware(async (req, res) => {
// //     try {
// //         const customer = await customerController.getCustomerById(req.params.id);
// //         res.status(200).json(customer);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // }));

// // router.put('/customer/:id', asyncMiddleware(async (req, res) => {
// //     try {
// //         const updatedCustomer = await customerController.updateCustomer(req.params.id, req.body);
// //         res.status(200).json(updatedCustomer);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // }));

// // router.get('/allcustomers', asyncMiddleware(async (req, res) => {
// //     try {
// //         const customers = await customerController.getAllCustomers();
// //         res.status(200).json(customers);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // }));

// // export default router;

// import express from "express";
// const router = express.Router();
// import customerModel from "../models/CustomerModel";

// // POST route to create a new customer
// router.post("/customerDetails", async (req, res) => {
//   try {
//     const { name, email, phone, address } = req.body; // Corrected property name to 'phone'
//     await customerModel.create({ name, email, phone, address });
//     return res.status(201).json({ message: "Customer detail saved to DB!" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server error!" });
//   }
// });

// // GET route to retrieve customer details by ID
// router.get("/customerDetails/:id", async (req, res) => {
//   try {
//     const customerDetailsId = req.params.id;
//     const customerDetails = await customerModel.findById(customerDetailsId);
//     console.log(customerDetails);
//     if (customerDetails) {
//       return res.status(200).json({ message: "Customer details found!", data: customerDetails });
//     } else {
//       return res.status(404).json({ message: "Customer details not found!" });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Server error!" });
//   }
// });

// // PUT route to update customer details by ID
// router.put("/customerDetails/:id", async (req, res) => {
//   try {
//     const customerDetailsId = req.params.id;
//     const { name, email, phone, address } = req.body; // Corrected property name to 'phone'
//     const updatedCustomer = await customerModel.findByIdAndUpdate(
//       customerDetailsId,
//       { name, email, phone, address },
//       { new: true }
//     );
//     console.log(updatedCustomer);
//     if (updatedCustomer) {
//       return res.status(200).json({ message: "Customer details updated!", data: updatedCustomer });
//     } else {
//       return res.status(404).json({ message: "Customer details not found!" });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Server error!" });
//   }
// });

// export default router;

import express from "express";
const router = express.Router();
import * as customerController from "../controllers/customer_controller.js"; // Explicitly added '.js'

// Define a simple asyncMiddleware function
const asyncMiddleware = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  
  // Now you can use asyncMiddleware in your route definitions
  router.post("/customerDetails", asyncMiddleware(customerController.createCustomer));
  router.get(
    "/customerDetails/:id",
    asyncMiddleware(customerController.getCustomerDetailsById)
  );
  router.put(
    "/customerDetails/:id",
    asyncMiddleware(customerController.updateCustomerDetailsById)
  );
  
  export default router;

