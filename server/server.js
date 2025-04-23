import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

//auth
import passport from "passport";
import session from "express-session";

import { connectDB } from "./config/db.js";

/* API ROUTES */
import authRoutes from "./routes/auth.js";
import employeeRoutes from "./routes/employee.js";
import accountRoutes from "./routes/account.js";

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:5173",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

/* SESSIONS */
app.use(
	session({
		secret: "united",
		resave: false,
		saveUninitialized: false,
		cookie: {
			domain: "localhost",
			httpOnly: true,
			secure: false,
			maxAge: null,
		},
	})
);

app.use(passport.initialize());
app.use(passport.session());
//----------------------------------------------------

app.use("/auth", authRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/account", accountRoutes);

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
