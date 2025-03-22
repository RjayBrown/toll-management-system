import express from "express";
import { employeeController } from "../controllers/employee.js";

const router = express.Router();

// admin only
router.get("/search", employeeController.getEmployee);
router.post("/register", employeeController.addEmployee);
router.put("/", employeeController.updateEmployeeInfo);
router.delete("/", employeeController.deleteEmployee);

export default router;
