import Account from "../models/Account.js";

export const accountController = {
	getAccounts: async (req, res) => {
		console.log(req.body);
		try {
			const data = await Account.find(req.body);
			// const data = await Account.find({ [filter]: value }); --- switch from POST to GET request (?)
			// console.log(data);
			return res.status(200).json({ success: true, accounts: data });
		} catch (error) {
			console.log("Failed to get account data"), error.message;
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
		}
	},
	addAccount: async (req, res) => {
		const data = req.body;
		console.log(data);
		try {
			if (!data) {
				console.log("Invalid account data");
				return res
					.status(404)
					.json({ success: false, message: "Invalid account data" });
			}
			const newAccount = new Account(data);
			await newAccount.save();
			console.log("Added Account");
			return res.status(201).json({ success: true, account: newAccount });
		} catch (error) {
			console.log("Failed to add account", error.message);
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
		}
	},
	updateAccountInfo: async (req, res) => {
		//  make update and validation dynamic and optimize (one call instead of 2?)
		const id = { accountNumber: req.body.accountNumber };
		const data = req.body;

		console.log(id);

		if (!id) {
			console.log("Invalid id: Account not found");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id: Account not found" });
		}

		try {
			const updatedAccount = await Account.findOneAndUpdate(id, data, {
				new: true,
			});
			console.log("Updated account");
			return res.status(200).json({ success: true, account: updatedAccount });
		} catch (error) {
			console.log("Failed to update account", error.message);
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
		}
	},
	deleteAccount: async (req, res) => {
		const id = { accountNumber: req.body.accountNumber };

		if (!id) {
			console.log("Invalid id: Account not found");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id: Account not found" });
		}

		try {
			await Account.findOneAndDelete(id);
			console.log("Deleted Account");
			return res
				.status(200)
				.json({ success: true, message: "Account deleted" });
		} catch (error) {
			console.log("Failed to delete account", error.message);
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
		}
	},
};
