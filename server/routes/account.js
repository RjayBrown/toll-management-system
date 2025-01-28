import express from "express";
import { accountController } from "../controllers/account.js";

const router = express.Router();

router.get("/search", accountController.getAccounts);
router.post("/", accountController.addAccount);
router.put("/", accountController.updateAccountInfo);
router.delete("/", accountController.deleteAccount);

export default router;
