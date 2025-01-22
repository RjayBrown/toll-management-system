import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";

/* API ROUTES */
import employeeRoutes from "./routes/employee.js";
import driverRoutes from "./routes/driver.js";

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(express.json());

app.use("/api/employee", employeeRoutes);
app.use("/ap/driveri", driverRoutes);

/* DEVELOPMENT CONFIGURATION */
const PORT = process.env.PORT || 8000;

/* PRODUCTION CONFIGURATION */
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log(`Server running on port ${PORT}`);
});
