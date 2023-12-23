import express from "express"
import dotenv from "dotenv"
import { db_connection } from "./mongo_db_connection.js";

dotenv.config({ path: '../config/.env' });
const app = express()
const port = process.env.SERVER_PORT || 5000

app.listen(()=>{
    console.log(`Server connecting to ${port}`) 
})

const db_url = process.env.MONGO_DB_URL;

// Call the db_connection function to establish the database connection
db_connection(db_url);
