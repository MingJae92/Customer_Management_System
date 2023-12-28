import express from "express";
import dotenv from "dotenv";
// import cors from "cors"
import { db_connection } from "./mongo_db_connection.js";
import CustomerRoutes from './routes/customer_route.js';


// import CustomerDataRoutes from "./routes/customer_route.js";
dotenv.config({ path: '../config/.env' }); 
const app = express();
const port = process.env.SERVER_PORT || 5000;
// app.use(cors({ origin: process.env.SERVER_PORT || 5000 }));
// Use middleware before defining routes
// app.use("/customerdataapi", CustomerDataRoutes);

app.use(express.json()); // Middleware for parsing JSON requests
app.use("/customerdataapi", CustomerRoutes); // Use the customerRoutes for /customerdataapi

app.listen(port, () => {
    console.log(`Server connecting to ${port}`);
});

const db_url = process.env.MONGO_DB_URL;

// Call the db_connection function to establish the database connection
db_connection(db_url);
