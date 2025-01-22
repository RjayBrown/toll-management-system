import Employee from "../models/Employee.js";

export const employeeController = {
	getEmployee: async (req, res) => {
		const data = req.body;

		try {
			const data = await Employee.findOne(data);
			console.log("Found Employees");
			return res.status(200).json({ success: true, data: data });
		} catch (error) {
			console.log("Failed to get data"), error.message;
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	addEmployee: async (req, res) => {
		const data = req.body;
		try {
			if (!data) {
				console.log("Invalid data");
				return res
					.status(404)
					.json({ success: false, message: "Invalid data/Data not found" });
			}
			const newEmployee = new Employee(data);
			await newEmployee.save();
			console.log("Added Employee");
			return res.status(201).json({ success: true, data: newEmployee });
		} catch (error) {
			console.log("Failed to add data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	updateEmployeeInfo: async (req, res) => {
		//  make update and validation dynamic and optimize (one call instead of 2?)
		const id = await Employee.findOne({ password: req.body.password });
		const data = { password: req.body.newPassword };

		console.log(id);

		if (!id) {
			console.log("Invalid id");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id/Employee not found" });
		}

		try {
			const updatedEmployeeInfo = await Employee.findOneAndUpdate(id, data, {
				new: true,
			});
			console.log("Updated Employee");
			return res.status(200).json({ success: true, data: updatedEmployeeInfo });
		} catch (error) {
			console.log("Failed to update data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
	deleteEmployee: async (req, res) => {
		const id = await Employee.findOne({ employeeID: req.body.employeeID });

		if (!id) {
			console.log("Invalid id");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id/Employee not found" });
		}

		try {
			await Employee.findOneAndDelete(id);
			console.log("Deleted Employee");
			return res
				.status(200)
				.json({ success: true, message: "Employee deleted" });
		} catch (error) {
			console.log("Failed to delete data", error.message);
			return res
				.status(500)
				.json({ success: false, message: "Server/Internal error" });
		}
	},
};
