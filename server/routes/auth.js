import express from "express";
import { authController } from "../controllers/auth.js";
import ensureAuth from "../config/auth.js";

const router = express.Router();

router.get("/", ensureAuth, authController.authenticate);
router.post("/login", authController.logIn);
router.get("/logout", authController.logOut);

export default router;
