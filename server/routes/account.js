import express from "express";
import { accountController } from "../controllers/account.js";

const router = express.Router();

// TODO: modify to return list of accounts by provided search parameters
router.post("/search", accountController.getAccounts);
// router.post("/create", accountController.creatNewRecord);
router.put("/update", accountController.updateAccountInfo);

// admin only
router.post("/", accountController.addAccount);
router.delete("/", accountController.deleteAccount);

export default router;
