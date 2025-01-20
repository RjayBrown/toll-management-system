import express from "express";
import { apiController } from "../controllers/data.js";

const router = express.Router();

router.get("/", apiController.getData);
router.post("/", apiController.addData);
router.put("/:id", apiController.updateData);
router.delete("/:id", apiController.deleteData);

export default router;
