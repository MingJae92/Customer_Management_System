// routes/customer.js
import express from 'express';
import { promises as fsPromises } from 'fs'; // Change import to avoid 'fs/promises' deprecation warning
import CustomerData from '../models/customer_model.js';

const { readFile, writeFile } = fsPromises; // Destructure fsPromises for better readability
const router = express.Router();

router.post('/customer', async (req, res) => {
    try {
        const customer = await CustomerData.create(req.body);
        const fileName = `customer_${customer._id}.json`;

        // Use writeFile instead of writeFileSync for better asynchronous handling
        await writeFile(fileName, JSON.stringify(req.body));

        res.status(201).json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/customer/:id', async (req, res) => {
    const fileName = `customer_${req.params.id}.json`;

    try {
        const customerData = await readFile(fileName, 'utf-8');
        res.status(200).json(JSON.parse(customerData));
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.status(404).json({ error: 'Customer not found' });
        } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

// Implement other CRUD routes similarly

export default router;
