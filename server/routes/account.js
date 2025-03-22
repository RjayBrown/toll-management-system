import express from "express";
import { accountController } from "../controllers/account.js";

const router = express.Router();

// TODO: modify to return list of accounts by provided search parameters
// router.get("/search/:params", accountController.getAccounts);
router.post("/search", accountController.getAccounts);
router.put("/", accountController.updateAccountInfo);

// admin only
router.post("/", accountController.addAccount);
router.delete("/", accountController.deleteAccount);

export default router;
