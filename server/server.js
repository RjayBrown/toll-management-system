import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import apiRoutes from "./routes/data.js";

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(express.json()); // accept json in req body
app.use(express.urlencoded({ extended: true })); // accept form data in req body

app.use("/api/data", apiRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	connectDB();
	console.log(`Server running on port ${PORT}`);
});
