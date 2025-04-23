import Account from "../models/Account.js";

export const accountController = {
	getAccounts: async (req, res) => {
		console.log(req.body);
		try {
			const data = await Account.find(req.body);

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
		const id = req.body.id;
		const subDoc = req.body.subDoc;
		const nestedSubDoc = req.body.nestedSubDoc;
		const index = req.body.index;
		const keys = req.body.keys;
		const data = req.body.data;
		const user = req.body.user;
		const push = req.body.push;

		console.log(req.body);

		if (!id) {
			console.log("Invalid id: Account not found");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id: Account not found" });
		}

		let account = await Account.findOne(id);

		if (push) {
			// Push new data to any subdocument array
			try {
				if (nestedSubDoc) {
					account[`${subDoc}`][`${nestedSubDoc}`][
						account[`${subDoc}`][`${nestedSubDoc}`].length
					] = data;
				}

				if (subDoc) {
					if (subDoc === "notes") {
						data.createdBy = user;
						account[`${subDoc}`][account[`${subDoc}`].length] = data;
					} else {
						account[`${subDoc}`][account[`${subDoc}`].length] = data;
					}
				}

				account.save();

				console.log(data);
				console.log(`Added new record for ${subDoc}`);

				return res.status(200).json({ success: true, account: account });
			} catch (error) {
				console.log("Failed to add record", error.message);

				return res.status(500).json({
					success: false,
					message: `Server/Internal error ${error}`,
				});
			}
		} else {
			try {
				// Update existing data
				keys.forEach((key) => {
					if (nestedSubDoc) {
						account[`${subDoc}`][`${nestedSubDoc}`][index][`${key}`] =
							data[`${key}`];
					}

					if (subDoc) {
						account[`${subDoc}`].length
							? (account[`${subDoc}`][index][`${key}`] = data[`${key}`])
							: (account[`${subDoc}`][`${key}`] = data[`${key}`]);
					} else {
						account[`${key}`] = data[`${key}`];
					}
				});

				account.save();

				console.log(data);
				console.log("Updated account");

				return res.status(200).json({ success: true, account: account });
			} catch (error) {
				console.log("Failed to add record", error.message);

				return res.status(500).json({
					success: false,
					message: `Server/Internal error ${error}`,
				});
			}
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
