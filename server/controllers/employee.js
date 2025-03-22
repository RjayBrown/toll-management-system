import Employee from "../models/Employee.js";
import bcrypt from "bcrypt";

export const employeeController = {
	getEmployee: async (req, res) => {
		try {
			const data = await Employee.find();
			console.log("Found Employee");
			return res.status(200).json({ success: true, employee: data });
		} catch (error) {
			console.log("Failed to get employee data"), error.message;
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
		}
	},
	addEmployee: async (req, res) => {
		try {
			const { employeeID, password, isAdmin } = req.body;
			if (!employeeID || !password) {
				return res
					.status(422) // server recognizes req format but data not validated
					.json({
						success: false,
						message: "employeeID, password and admin status are required",
					});
			}

			if (await Employee.findOne({ employeeID })) {
				return res
					.status(409) // data conflict
					.json({ success: false, message: "EmployeeID already exists" });
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			const newEmployee = await Employee.create({
				employeeID,
				password: hashedPassword,
				isAdmin,
			});
			return res.status(201).json({
				success: true,
				id: newEmployee._id,
				employeeID: newEmployee.employeeID,
				isAdmin: newEmployee.isAdmin,
			});
		} catch (error) {
			console.log("Failed to add employee"), error.message;
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
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
				.json({ success: false, message: "Invalid id: Employee not found" });
		}

		try {
			const updatedEmployeeInfo = await Employee.findOneAndUpdate(id, data, {
				new: true,
			});
			console.log("Updated Employee");
			return res
				.status(200)
				.json({ success: true, employee: updatedEmployeeInfo });
		} catch (error) {
			console.log("Failed to update employee data", error.message);
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
		}
	},
	deleteEmployee: async (req, res) => {
		const id = await Employee.findOne({ employeeID: req.body.employeeID });

		if (!id) {
			console.log("Invalid id");
			return res
				.status(404)
				.json({ success: false, message: "Invalid id: Employee not found" });
		}

		try {
			await Employee.findOneAndDelete(id);
			console.log("Deleted Employee");
			return res
				.status(200)
				.json({ success: true, message: "Employee deleted" });
		} catch (error) {
			console.log("Failed to delete employee data", error.message);
			return res
				.status(500)
				.json({ success: false, message: `Server/Internal error ${error}` });
		}
	},
};
