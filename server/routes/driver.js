import express from "express";
import { driverController } from "../controllers/driver.js";

const router = express.Router();

router.get("/", driverController.getDrivers);
router.post("/", driverController.addDriver);
router.put("/", driverController.updateDriverInfo);
router.delete("/", driverController.deleteDriver);

export default router;
