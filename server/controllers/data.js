import mongoose from "mongoose";
import Data from "../models/Data.js";

export const apiController = {
	getData: async (req, res) => {
		try {
			await Data.find({});
			console.log("Found data");
			return res
				.status(200)
				.json({ success: true, message: "Invalid data/Missing data" });
		} catch (error) {
			console.log("Failed to get data"), error.message;
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	addData: async (req, res) => {
		const data = req.body; // client sending data
		console.log(data);
		try {
			if (!data) {
				console.log("Invalid data!");
				return res
					.status(404)
					.json({ success: false, message: "Invalid data/Data not found" });
			}
			const newData = new Data(data); // client sending data
			await newData.save();
			console.log("Added data");
			return res.status(201).json({ success: true, data: newData });
		} catch (error) {
			console.log("Failed to add data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	updateData: async (req, res) => {
		const { id } = req.params;
		const data = req.body;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			console.log("Invalid data!");
			return res
				.status(404)
				.json({ success: false, message: "Invalid data/Data not found" });
		}

		try {
			const updatedData = await Data.findByIdAndUpdate(id, data, { new: true });
			console.log("Updated data");
			return res.status(200).json({ success: true, data: updatedData });
		} catch (error) {
			console.log("Failed to update data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	deleteData: async (req, res) => {
		try {
			await Data.findByIdAndDelete(id);
			console.log("Deleted data");
			return res.status(200).json({ success: true, message: "Data deleted" });
		} catch (error) {
			console.log("Failed to delete data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
};
