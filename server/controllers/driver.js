import Driver from "../models/Driver.js";

export const driverController = {
	getDrivers: async (req, res) => {
		try {
			const data = await Driver.find();
			console.log("Found Drivers");
			return res.status(200).json({ success: true, data: data });
		} catch (error) {
			console.log("Failed to get data"), error.message;
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	addDriver: async (req, res) => {
		const data = req.body;
		console.log(data);
		try {
			if (!data) {
				console.log("Invalid data!");
				return res
					.status(404)
					.json({ success: false, message: "Invalid data/Data not found" });
			}
			const newDriver = new Driver(data);
			await newDriver.save();
			console.log("Added Driver");
			return res.status(201).json({ success: true, data: newDriver });
		} catch (error) {
			console.log("Failed to add data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	updateDriverInfo: async (req, res) => {
		//  make update and validation dynamic and optimize (one call instead of 2?)
		const id = { accountNumber: req.body.accountNumber };
		const data = req.body;

		console.log(id);

		if (!id) {
			console.log("Invalid id");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id/Driver not found" });
		}

		try {
			const updatedDriverInfo = await Driver.findOneAndUpdate(id, data, {
				new: true,
			});
			console.log("Updated Driver");
			return res.status(200).json({ success: true, data: updatedDriverInfo });
		} catch (error) {
			console.log("Failed to update data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	deleteDriver: async (req, res) => {
		const id = { accountNumber: req.body.accountNumber };

		if (!id) {
			console.log("Invalid id");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id/Driver not found" });
		}

		try {
			await Driver.findOneAndDelete(id);
			console.log("Deleted Driver");
			return res.status(200).json({ success: true, message: "Driver deleted" });
		} catch (error) {
			console.log("Failed to delete data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
};
