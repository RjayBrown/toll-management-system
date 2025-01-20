import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
	{
		data: {
			type: String,
			required: true,
		},
		data2: {
			type: Number,
			required: true,
		},
		data3: {
			type: Boolean,
			required: true,
		},
	},
	{ timestamps: true } // include createdAt, updatedAt in document
);

const Data = mongoose.model("Testdoc", dataSchema);

export default Data;
