import express from "express";
import { employeeController } from "../controllers/employee.js";

const router = express.Router();

router.get("/", employeeController.getEmployee);
router.post("/", employeeController.addEmployee);
router.put("/", employeeController.updateEmployeeInfo);
router.delete("/", employeeController.deleteEmployee);

export default router;
