import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
	{
		employeeID: {
			type: Number,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
		},
	},
	{ timestamps: true } // include createdAt, updatedAt in document
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
