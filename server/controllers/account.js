import Account from "../models/Account.js";

export const accountController = {
	getAccounts: async (req, res) => {
		try {
			const data = await Account.find();
			console.log("Found Drivers");
			return res.status(200).json({ success: true, data: data });
		} catch (error) {
			console.log("Failed to get data"), error.message;
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	addAccount: async (req, res) => {
		const data = req.body;
		console.log(data);
		try {
			if (!data) {
				console.log("Invalid data!");
				return res
					.status(404)
					.json({ success: false, message: "Invalid data/Data not found" });
			}
			const newAccount = new Account(data);
			await newAccount.save();
			console.log("Added Account");
			return res.status(201).json({ success: true, data: newAccount });
		} catch (error) {
			console.log("Failed to add data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	updateAccountInfo: async (req, res) => {
		//  make update and validation dynamic and optimize (one call instead of 2?)
		const id = { accountNumber: req.body.accountNumber };
		const data = req.body;

		console.log(id);

		if (!id) {
			console.log("Invalid id");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id/Account not found" });
		}

		try {
			const updatedAccountInfo = await Account.findOneAndUpdate(id, data, {
				new: true,
			});
			console.log("Updated Account");
			return res.status(200).json({ success: true, data: updatedAccountInfo });
		} catch (error) {
			console.log("Failed to update data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	deleteAccount: async (req, res) => {
		const id = { accountNumber: req.body.accountNumber };

		if (!id) {
			console.log("Invalid id");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id/Account not found" });
		}

		try {
			await Account.findOneAndDelete(id);
			console.log("Deleted Account");
			return res
				.status(200)
				.json({ success: true, message: "Account deleted" });
		} catch (error) {
			console.log("Failed to delete data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
};
